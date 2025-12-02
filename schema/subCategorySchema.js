const { DataTypes } = require('sequelize');
const Db = require('../utils/database');
const MainProduct = require('./mainProductSchema');

const SubCategory = Db.define('subCategory',{
    id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
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

SubCategory.hasMany(MainProduct);
MainProduct.belongsTo(SubCategory)

module.exports = SubCategory