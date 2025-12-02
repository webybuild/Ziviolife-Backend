const Admin = require('../schema/adminSchema');

module.exports = async ( req, res ) => {
    try {
        const { email, password } = req.body;
        const data = await Admin.findOne({ where: { email, password }, raw: true});
        console.log(data)
        const token = '254594uyf';
        if(data) {
            res.status(200).json({token})
        } else {
            res.status(400).json({message: 'Please provide correct credentials!'})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Something went wrong. Please try again!'})
    }
}