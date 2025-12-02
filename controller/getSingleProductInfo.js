const Product = require('../schema/productSchema')

module.exports = async (req, res) => {
    try {
        const {name} = req.params;
        const data = await Product.findOne({where: { name }, raw: true});
        res.status(200).json({data})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Something went wrong. Please try again!'})
    }
}