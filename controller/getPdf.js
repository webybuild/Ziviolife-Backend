const S3 = require("../utils/s3Connection");
const Bucket = process.env.S3_BUCKET;

module.exports = async (req, res) => {
  const { filename } = req.params;

  const params = {
    Bucket,
    Key: "pdfs/" + filename,
  };

  S3.getObject(params, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Something went wrong. Please try again!");
    } else {
      res.status(200).set("Content-Type", "application/pdf").send(data.Body);
    }
  });
};
