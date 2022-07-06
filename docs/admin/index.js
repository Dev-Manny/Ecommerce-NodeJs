const adminLogin = require('./adminLogin');
const isAdmin = require('./isAdmin');
const products = require('./viewProducts');

module.exports = {
    paths:{
        '/admin/login':{
            ...adminLogin,
        },
        '/admin/is-login':{
            ...isAdmin,
        },
        '/admin/product':{
            ...products,
        },
    }
}