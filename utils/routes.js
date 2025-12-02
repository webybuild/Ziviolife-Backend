const createNewCategory = require('../controller/createNewCategory');
const createNewSubCategory = require('../controller/createNewSubCategory');
const createNewMainProduct = require('../controller/createNewMainProduct');
const createNewProduct = require('../controller/createNewProduct');
const login = require('../controller/login')
const getImage = require('../controller/getImage');
const getAllProductData = require('../controller/getAllProductData');
const getCategoryList = require('../controller/getCategoryList');
const getSubCategories = require('../controller/getSubCategories');
const getMainProducts = require('../controller/getMainProducts');
const getMainProductInfo = require('../controller/getMainProductInfo');
const getPdf = require('../controller/getPdf');
const deleteProduct = require('../controller/deleteProduct');
const updateProduct = require('../controller/updateProduct');
const updateSubCategory = require('../controller/updateSubCategory');
const deleteSubCategory = require('../controller/deleteSubCategory');
const updateMainProduct = require('../controller/updateMainProduct');
const deleteMainProduct = require('../controller/deleteMainProduct');
const getSingleProductInfo = require('../controller/getSingleProductInfo');


const routes = [
    {
        path: '/login',
        method: 'POST',
        controller: login,
        auth: false
    },
    {
        path: '/category',
        method: 'POST',
        controller: createNewCategory,
        auth: false
    },
    {
        path: '/sub_category',
        method: 'POST',
        controller: createNewSubCategory,
        auth: false
    },
    {
        path: '/sub_category',
        method: 'PATCH',
        controller: updateSubCategory,
        auth: false
    },
    {
        path: '/sub_category/:id',
        method: 'DELETE',
        controller: deleteSubCategory,
        auth: false
    },
    {
        path: '/main_product',
        method: 'POST',
        controller: createNewMainProduct,
        auth: false
    },
    {
        path: '/main_product',
        method: 'PATCH',
        controller: updateMainProduct,
        auth: false
    },
    {
        path: '/main_product/:id',
        method: 'DELETE',
        controller: deleteMainProduct,
        auth: false
    },
    {
        path: '/product/:name',
        method: 'GET',
        controller: getSingleProductInfo,
        auth: false
    },
    {
        path: '/product',
        method: 'POST',
        controller: createNewProduct,
        auth: false
    },
    {
        path: '/product/:id',
        method: 'DELETE',
        controller: deleteProduct,
        auth: false
    },
    {
        path: '/product/:id',
        method: 'PATCH',
        controller: updateProduct,
        auth: false
    },
    {
        path: '/all_product_data',
        method: 'GET',
        controller: getAllProductData,
        auth: false
    },
    {
        path: '/category_list',
        method: 'GET',
        controller: getCategoryList,
        auth: false
    },
    {
        path: '/subcategories/:categoryName',
        method: 'GET',
        controller: getSubCategories,
        auth: false
    },
    {
        path: '/mainproducts/:subCategoryName',
        method: 'GET',
        controller: getMainProducts,
        auth: false
    },
    {
        path: '/main_product_info/:name',
        method: 'GET',
        controller: getMainProductInfo,
        auth: false
    },
    {
        path: '/images/:filename',
        method: 'GET',
        controller: getImage,
        auth: false
    },
    {
        path: '/pdf/:filename',
        method: 'GET',
        controller: getPdf,
        auth: false
    }
]

function renderRoutes (app) {
    routes.forEach(route => {
        
        switch (route.method) {
            case 'GET':
                if( route.auth !== undefined ){
                    app.get(route.path, route.controller)
                } else {
                    app.get(route.path, authenticator, route.controller)
                }
                break;

            case 'POST':
                if( route.auth !== undefined ){
                    app.post(route.path, route.controller)
                } else {
                    app.post(route.path, authenticator, route.controller)
                }
                break;

            case 'PATCH':
                if( route.auth !== undefined ){
                    app.patch(route.path, route.controller)
                } else {
                    app.patch(route.path, authenticator, route.controller)
                }
                break

            case 'DELETE':
                if( route.auth !== undefined ){
                    app.delete(route.path, route.controller)
                } else {
                    app.delete(route.path, authenticator, route.controller)
                }
                break
        
            default:
                break;
        }
    })
    console.log('Connecting to Database...')
}

module.exports = renderRoutes;