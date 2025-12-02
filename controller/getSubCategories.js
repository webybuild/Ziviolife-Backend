const Category = require("../schema/categorySchema");
const SubCategory = require("../schema/subCategorySchema");


module.exports = async (req, res) => {
    try {
        const { categoryName } = req.params;
        const category = await Category.findOne({ where: { name: categoryName}, attributes: ['id']});
        const data = await SubCategory.findAll({ where: { categoryId: category.dataValues.id }});
        res.status(200).json({data})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Something went wrong. Please try again!'})
    }
}