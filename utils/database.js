const Sequelize = require("sequelize");

const Db = new Sequelize({
  database: "ziviolife",
  username: "postgres",
  password: "RsqpMekIfHZ2Fgg5Muke",
  host: "ziviolife-db-postgres.cq124cwu48dn.us-east-1.rds.amazonaws.com",
  port: 5432,
  ssl: true,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = Db;
