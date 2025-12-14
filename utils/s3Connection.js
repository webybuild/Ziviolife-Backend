var AWS = require("aws-sdk");

AWS.config.update({});
const s3 = new AWS.S3();

module.exports = s3;
