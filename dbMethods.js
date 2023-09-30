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
  try {
    const res = await Products.findByPk(pk);
    if (res) {
      return res.dataValues;
    } else {
      console.log('Entry does not exist.');
    }
  } catch (error) {
    console.log(error);
  }
}