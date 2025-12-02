const Category = require("../schema/categorySchema");


module.exports = async (req, res) => {
    try {
        const { name } = req.body;
        const data = await Category.create({ name, status: 'Active' });
        res.status(200).json({ message: 'New Category Added Successfully!', data })
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Something went wrong. Please try again!'})
    }
}