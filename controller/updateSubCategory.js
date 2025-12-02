const SubCategory = require("../schema/subCategorySchema");


module.exports = async (req, res) => {
    try {
        const { id, name } = req.body;
        await SubCategory.update({name}, { where: { id }});
        res.status(200).json({message: 'Sub-Category updated successfully!'})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Something went wrong. Please try again!'})
    }
}