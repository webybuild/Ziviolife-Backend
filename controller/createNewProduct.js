const Product = require("../schema/productSchema");
const s3 = require("../utils/s3Connection");
const Bucket = process.env.S3_BUCKET;

module.exports = async (req, res) => {
  try {
    // if (
    //   req.body.productVariants &&
    //   typeof req.body.productVariants === "string"
    // ) {
    //   req.body.productVariants = [req.body.productVariants];
    // }
    const images = req.files.filter((file) => file.fieldname === "image");
    const complianceImages = req.files.filter(
      (file) => file.fieldname === "complianceImages"
    );
    const pdfs = req.files.filter((file) => file.fieldname === "pdf");
    const imageList = [];
    const complianceImageList = [];
    const pdfList = {};

    const imageUploadPromises = images.map((image) => {
      const fileName =
        Date.now() +
        "-" +
        Math.round(Math.random() * 1e9) +
        "." +
        image.mimetype.split("/")[1];
      imageList.push(fileName);
      const params = {
        Bucket,
        Key: "images/" + fileName,
        Body: image.buffer,
        ContentType: image.mimetype,
      };

      return s3.upload(params).promise();
    });

    const opticImageUploadPromises = complianceImages.map((image) => {
      const fileName =
        "image" +
        "-" +
        Date.now() +
        "-" +
        Math.round(Math.random() * 1e9) +
        "." +
        image.mimetype.split("/")[1];
      complianceImageList.push(fileName);
      const params = {
        Bucket,
        Key: "images/" + fileName,
        Body: image.buffer,
        ContentType: image.mimetype,
      };

      return s3.upload(params).promise();
    });

    const pdfUploadPromises = pdfs.map((pdf) => {
      const fileName =
        Date.now() + "-" + Math.round(Math.random() * 1e9) + ".pdf";
      pdfList[pdf.originalname] = fileName;
      const params = {
        Bucket,
        Key: "pdfs/" + fileName,
        Body: pdf.buffer,
        ContentType: pdf.mimetype,
      };

      return s3.upload(params).promise();
    });

    await Promise.all(imageUploadPromises);
    await Promise.all(opticImageUploadPromises);
    await Promise.all(pdfUploadPromises);

    await Product.create({
      ...req.body,
      status: "Active",
      images: imageList,
      complianceImages: complianceImageList,
      pdfs: JSON.stringify(pdfList),
    });
    res.status(200).json({ message: "Product Added Successfully!" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again!" });
  }
};
