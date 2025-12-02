const MainProduct = require("../schema/mainProductSchema");
const Product = require("../schema/productSchema");


module.exports = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Product.findAll({ where: { id }, raw: true})
        if(data.length === 0) {
            await MainProduct.destroy({ where: { id }});
            res.status(200).json({message: 'Main Product Deleted Successfully!'})
        } else {
            res.status(400).json({message: 'Please delete all the products under this main product and try again!'})
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Something went wrong. Please try again!'})
    }
}