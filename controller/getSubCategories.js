const Category = require("../schema/categorySchema");
const SubCategory = require("../schema/subCategorySchema");


module.exports = async (req, res) => {
    try {
        const { categoryName } = req.params;
        const category = await Category.findOne({ where: { name: categoryName}, attributes: ['id']});
        console.log(category);
        if(!category) {
            return res.status(404).json({message: 'Category not found'})
        }
        const data = await SubCategory.findAll({ where: { categoryId: category.dataValues.id || category.id, status: 'Active' }});
        res.status(200).json({data})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Something went wrong. Please try again!'})
    }
}