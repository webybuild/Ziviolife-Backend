const SubCategory = require("../schema/subCategorySchema");
const s3 = require("../utils/s3Connection");

module.exports = async (req, res) => {
  try {
    const fileType = req.files[0].mimetype.split("/")[1];
    const fileName =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + "." + fileType;

    const params = {
      Bucket: "aartizelite",
      Key: "images/" + fileName,
      Body: req.files[0].buffer,
      ContentType: "image/" + fileType,
    };

    s3.putObject(params, async (err, data) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .json({ message: "Failed to upload image! Please try again!" });
      } else {
        const { name, categoryId } = req.body;
        const data = await SubCategory.create({
          name,
          categoryId,
          imageUrl: fileName,
          status: "Active",
        });
        res
          .status(200)
          .json({ data, message: "New Sub-Category Added Successfully!" });
      }
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again!" });
  }
};
