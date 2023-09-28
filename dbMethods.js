import { DataTypes } from 'sequelize';
import connectDB from './conection.js';

const Products = connectDB.define('Products', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    count: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    }
  }, {
    timestamps: false
  });
await Products.sync();

export default async function  queryDatabase(pk) {
    const res = await Products.findByPk(pk);
    return res.dataValues;
}