const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const dotenv = require("dotenv").config();
const renderRoutes = require("./utils/routes");

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(cors());
app.use(upload.any());
app.use(bodyParser.json());

renderRoutes(app);

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}`);
});

module.exports = app;

// checking code build
