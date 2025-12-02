const MainProduct = require("../schema/mainProductSchema");
const Product = require("../schema/productSchema");


module.exports = async (req, res) => {
    try {
        const {name} = req.params;
        const data = await MainProduct.findOne({ where: { name }, include: [Product]});
        res.status(200).json({data})
    } catch (error) {
        console.log(error)
    }
}