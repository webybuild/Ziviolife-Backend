const MainProduct = require("../schema/mainProductSchema");
const s3 = require("../utils/s3Connection");
const Bucket = process.env.S3_BUCKET;

module.exports = async (req, res) => {
  try {
    const complianceImages = req.files.filter(
      (file) => file.fieldname === "complianceImages"
    );
    const complianceImageList = [];
    const complianceImageUploadPromises = complianceImages.map((image) => {
      const fileName =
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

    await Promise.all(complianceImageUploadPromises);

    const fileName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      "." +
      req.files
        .filter((file) => file.fieldname === "image")[0]
        .mimetype.split("/")[1];

    const params = {
      Bucket,
      Key: "images/" + fileName,
      Body: req.files.filter((file) => file.fieldname === "image")[0].buffer,
      ContentType: req.files.filter((file) => file.fieldname === "image")[0]
        .mimetype,
    };

    s3.putObject(params, async (err, data) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .json({ message: "Failed to upload image! Please try again!" });
      } else {
        const { name, description, subCategoryId } = req.body;
        const data = await MainProduct.create({
          name,
          description,
          subCategoryId,
          imageUrl: fileName,
          complianceImages: complianceImageList,
          status: "Active",
        });
        res
          .status(200)
          .json({ data, message: "New Main Product Added Successfully!" });
      }
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again!" });
  }
};
