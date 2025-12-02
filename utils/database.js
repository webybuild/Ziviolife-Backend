const Sequelize = require("sequelize");

const Db = new Sequelize({
  database: "aartizelite",
  username: "admin_aartize",
  password: "PGUTpOgXBG0M4PG05Yu8",
  host: "aartize-db.czoycsmow908.us-east-1.rds.amazonaws.com",
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
