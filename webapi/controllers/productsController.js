const route = require('express').Router()
const productModel = require('../models/product/productModel')


route.post('/export', productModel.addProducts)
route.get('/:id', productModel.getProductById)
route.get('/import/all', productModel.getAllProducts)





module.exports = route