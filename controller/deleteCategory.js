const Category = require("../schema/categorySchema");


module.exports = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Category.update({ status: 'Inactive'}, { where: { id }});
        res.status(200).json({message: 'Category Deleted Successfully!'})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Something went wrong. Please try again!'})
    }
}