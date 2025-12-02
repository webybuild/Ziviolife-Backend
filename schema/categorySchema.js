const { DataTypes } = require('sequelize');
const Db = require('../utils/database');
const SubCategory = require('./subCategorySchema');

const Category = Db.define('category',{
    id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
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

Category.hasMany(SubCategory);
SubCategory.belongsTo(Category);

module.exports = Category