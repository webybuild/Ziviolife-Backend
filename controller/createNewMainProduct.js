const MainProduct = require("../schema/mainProductSchema");
const s3 = require("../utils/s3Connection");

module.exports = async (req, res) => {
  try {
    const featureImages = req.files.filter(
      (file) => file.fieldname === "featureImages"
    );
    const opticImages = req.files.filter(
      (file) => file.fieldname === "opticImages"
    );
    const featureList = [];
    const opticList = [];

    const featureImageUploadPromises = featureImages.map((image) => {
      const fileName =
        Date.now() +
        "-" +
        Math.round(Math.random() * 1e9) +
        "." +
        image.mimetype.split("/")[1];
      featureList.push(fileName);
      const params = {
        Bucket: "aartizelite",
        Key: "images/" + fileName,
        Body: image.buffer,
        ContentType: image.mimetype,
      };

      return s3.upload(params).promise();
    });

    const opticImageUploadPromises = opticImages.map((image) => {
      const fileName =
        Date.now() +
        "-" +
        Math.round(Math.random() * 1e9) +
        "." +
        image.mimetype.split("/")[1];
      opticList.push(fileName);
      const params = {
        Bucket: "aartizelite",
        Key: "images/" + fileName,
        Body: image.buffer,
        ContentType: image.mimetype,
      };

      return s3.upload(params).promise();
    });

    await Promise.all(featureImageUploadPromises);
    await Promise.all(opticImageUploadPromises);

    const fileName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      "." +
      req.files
        .filter((file) => file.fieldname === "image")[0]
        .mimetype.split("/")[1];

    const params = {
      Bucket: "aartizelite",
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
        const { name, description, techSpecs, subCategoryId } = req.body;
        const data = await MainProduct.create({
          name,
          description,
          techSpecs: JSON.parse(techSpecs),
          subCategoryId,
          imageUrl: fileName,
          featureImages: featureList,
          opticImages: opticList,
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
