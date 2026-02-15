const { DataTypes } = require('sequelize');
const Db = require('../utils/database');
const Product = require('./productSchema');

const MainProduct = Db.define('mainProduct',{
    id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    subCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    complianceImages: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM(['Active', 'Inactive']),
        allowNull: false
    }
},
{
    timestamps: false
}
)

MainProduct.hasMany(Product);
Product.belongsTo(MainProduct);

module.exports = MainProduct