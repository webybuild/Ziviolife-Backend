const { DataTypes } = require('sequelize');
const Db = require('../utils/database');

const Product = Db.define('product',{
    id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    mainProductId: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    applicationArea: {
        type: DataTypes.STRING,
        allowNull: true
    },
    benefits: {
        type: DataTypes.STRING,
        allowNull: true
    },
    code: {
        type: DataTypes.STRING,
        allowNull: true
    },
    material: {
        type: DataTypes.STRING,
        allowNull: true
    },
    lumen: {
        type: DataTypes.STRING,
        allowNull: true
    },
    efficacy: {
        type: DataTypes.STRING,
        allowNull: true
    },
    driverOption: {
        type: DataTypes.STRING,
        allowNull: true
    },
    driver: {
        type: DataTypes.STRING,
        allowNull: true
    },
    inputVoltage: {
        type: DataTypes.STRING,
        allowNull: true
    },
    opticValues: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cct: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cri: {
        type: DataTypes.STRING,
        allowNull: true
    },
    size: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dimmingType: {
        type: DataTypes.STRING,
        allowNull: true
    },
    finishColor: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ip: {
        type: DataTypes.STRING,
        allowNull: true
    },
    operatingTemperature: {
        type: DataTypes.STRING,
        allowNull: true
    },
    lro: {
        type: DataTypes.STRING,
        allowNull: true
    },
    wattage: {
        type: DataTypes.STRING,
        allowNull: true
    },
    l80B50: {
        type: DataTypes.STRING,
        allowNull: true
    },
    variant: {
        type: DataTypes.STRING,
        allowNull: true
    },
    productVariants: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: true
    },
    images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true
    },
    complianceImages: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true
    },
    pdfs: {
        type: DataTypes.TEXT,
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

module.exports = Product