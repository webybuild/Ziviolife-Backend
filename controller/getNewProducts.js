const Product = require('../schema/productSchema');

module.exports = async (req, res) => {
    try {
        const data = await Product.find({ order: ['id', 'DESC'], limit: 10, raw: true})
        console.log(data)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Something went wrong. Please try again!'})
    }
}