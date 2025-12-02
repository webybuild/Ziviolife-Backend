const Product = require("../schema/productSchema");


module.exports = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Product.destroy({ where: { id }});
        res.status(200).json({message: 'Product Deleted Successfully!'})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Something went wrong. Please try again!'})
    }
}