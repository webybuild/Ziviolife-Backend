const Db = require('./database');
const Admin = require('../schema/adminSchema');
const Category = require('../schema/categorySchema');
const MainProduct = require('../schema/mainProductSchema');
const Product = require('../schema/productSchema');
const SubCategory = require('../schema/subCategorySchema');



(async function(){
    console.log("Syncing tables with the database....");
const sync = await Db.sync({alter: true});
console.log('Syncing complete..!');
})()
