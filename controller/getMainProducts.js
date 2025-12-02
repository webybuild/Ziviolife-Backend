const SubCategory = require("../schema/subCategorySchema");
const MainProduct = require("../schema/mainProductSchema");


module.exports = async (req, res) => {
    try {
        const { subCategoryName } = req.params;
        const subCategory = await SubCategory.findOne({ where: { name: subCategoryName}, attributes: ['id']});
        const data = await MainProduct.findAll({ where: { subCategoryId: subCategory.dataValues.id }});
        res.status(200).json({data})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Something went wrong. Please try again!'})
    }
}