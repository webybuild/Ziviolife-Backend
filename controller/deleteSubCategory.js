const MainProduct = require("../schema/mainProductSchema");
const SubCategory = require("../schema/subCategorySchema");


module.exports = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await MainProduct.findAll({ where: { subCategoryId: id}, raw: true});
        if (data.length === 0){
            await SubCategory.destroy({ where: { id }});
            res.status(200).json({message: 'Sub-Category Deleted Successfully!'})
        } else {
            res.status(400).json({message: 'Please delete all the products from this sub-category and try again!'})
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Something went wrong. Please try again!'})
    }
}