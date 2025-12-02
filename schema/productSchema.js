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
    dimension: {
        type: DataTypes.STRING,
        allowNull: true
    },
    code: {
        type: DataTypes.STRING,
        allowNull: true
    },
    material: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lightSource: {
        type: DataTypes.STRING,
        allowNull: false
    },
    power: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lumen: {
        type: DataTypes.STRING,
        allowNull: false
    },
    efficacy: {
        type: DataTypes.STRING,
        allowNull: false
    },
    driverOption: {
        type: DataTypes.STRING,
        allowNull: false
    },
    driver: {
        type: DataTypes.STRING,
        allowNull: false
    },
    inputVoltage: {
        type: DataTypes.STRING,
        allowNull: false
    },
    optic: {
        type: DataTypes.STRING,
        allowNull: false
    },
    opticValues: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cct: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bug: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ulr: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ulor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cie: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dimmingType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    productColors: {
        type: DataTypes.STRING,
        allowNull: false
    },
    weight: {
        type: DataTypes.STRING,
        allowNull: false
    },
    operatingTemperature: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cable: {
        type: DataTypes.STRING,
        allowNull: false
    },
    throughWiring: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    macadamEllipse: {
        type: DataTypes.STRING,
        allowNull: false
    },
    l90B10: {
        type: DataTypes.STRING,
        allowNull: false
    },
    l80B10: {
        type: DataTypes.STRING,
        allowNull: false
    },
    l80B50: {
        type: DataTypes.STRING,
        allowNull: false
    },
    variant: {
        type: DataTypes.STRING,
        allowNull: false
    },
    productVariants: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false
    },
    images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    opticImages: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    pdfs: {
        type: DataTypes.TEXT,
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

module.exports = Product