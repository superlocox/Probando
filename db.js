const Pool = require("pg").Pool;
require("dotenv").config();

// const devConfig = {
//   user: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
//   host: process.env.PG_HOST,
//   database: process.env.PG_DATABASE,
//   port: process.env.PG_PORT,
// };

const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

const proConfig = `postgres://ehegfleqnmhrbt:f4deb8f3274e7291c17225b39380648b3d7769337a0f461bc27d4bc459008f88@ec2-54-164-22-242.compute-1.amazonaws.com:5432/d7kp4krumesgkf`; //heroku addons
console.log(proConfig);
const pool = new Pool({
  connectionString:
    process.env.NODE_ENV === "production" ? proConfig : devConfig,
    ssl: {
      rejectUnauthorized: false
    }
});

module.exports = pool;
