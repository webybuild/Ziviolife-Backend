const MainProduct = require("../schema/mainProductSchema");


module.exports = async (req, res) => {
    try {
        const { subCategoryId } = req.params;
        const data = await MainProduct.findAll({ where: { subCategoryId } });
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Something went wrong. Please try again!'})
    }
}