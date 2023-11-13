const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product', // This refers to the 'product' model
        key: 'id',        // This refers to the 'id' column in the 'product' model
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',  // This refers to the 'tag' model
        key: 'id',     // This refers to the 'id' column in the 'tag' model
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
