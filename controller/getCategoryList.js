const Category = require("../schema/categorySchema");


module.exports = async ( req, res ) => {
    try {
        const data = await Category.findAll({where: { status: 'Active'}});
        res.status(200).json({data})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Something went wrong. Please try again!'})
    }
}