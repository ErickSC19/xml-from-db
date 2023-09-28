import { Sequelize } from "sequelize";

const connectDB = new Sequelize(
  "xmldb",
  "root",
  "root",
  {
    host: "localhost",
    port: "3306",
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    operatorAliases: false,
    logging: false
  }
);

export default connectDB;
