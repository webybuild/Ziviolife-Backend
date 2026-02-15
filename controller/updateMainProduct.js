const MainProduct = require("../schema/mainProductSchema");

module.exports = async (req, res) => {
    try {
        const { id, name, description } = req.body;
        await MainProduct.update({name, description}, { where: { id }});
        res.status(200).json({message: 'Main Product Updated Successfully!'})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Something went wrong. Please try again!'})
    }
}