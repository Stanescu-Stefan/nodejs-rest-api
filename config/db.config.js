const { createPool } = require("mysql");
/* Connection pool creation - START */

const db = createPool({
  port: 3306,
  host: "DB_SECRET_HOST",
  user: "DB_SECRET_USERNAME",
  password: "DB_SECRET_PASSWORD",
  database: "DB_SECRET_DBNAME",
  connectionLimit: 10
});

/* Connection pool creation - END */

module.exports = db;
