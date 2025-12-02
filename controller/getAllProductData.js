const Category = require("../schema/categorySchema");
const MainProduct = require("../schema/mainProductSchema");
const SubCategory = require("../schema/subCategorySchema");


module.exports = async (req, res) => {
    try {
        const [ categories, subCategories, mainProducts ] = await Promise.all([
            Category.findAll({ where: { status: 'Active'}, attributes: ['id', 'name']}),
            SubCategory.findAll({ where: { status: 'Active'}, attributes: ['id', 'name', 'categoryId']}),
            MainProduct.findAll({ where: { status: 'Active'}, attributes: ['id', 'name', 'subCategoryId']})
        ])
        res.status(200).json({categories, subCategories, mainProducts})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Something went wrong. Please try again!'})
    }
}