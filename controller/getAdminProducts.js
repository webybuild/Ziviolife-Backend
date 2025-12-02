const Product = require("../schema/productSchema");


module.exports = async (req, res) => {
    try {
        const { mainProductId } = req.params;
        const data = await Product.findAll({ where: { mainProductId }});
        res.status(200).json({data})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Something went wrong. Please try again!'})
        
    }
}