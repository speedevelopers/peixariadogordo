const express = require('express')

const CategoryController = require('./controllers/CategoryController')
const ClientController = require('./controllers/ClientController')
const ProductController = require('./controllers/ProductController')
const SaleController = require('./controllers/SaleController')
const SaleItemController = require('./controllers/SaleItemController')
const ReportController = require('./controllers/ReportController')
const UserController = require('./controllers/UserController')


const routes = express.Router()


// category

routes.get('/category',CategoryController.index)
routes.post('/category',CategoryController.create)
routes.put('/category',CategoryController.update)
routes.delete('/category/:id',CategoryController.delete)

// client

routes.get('/client',ClientController.index)
routes.post('/client',ClientController.create)
routes.put('/client',ClientController.update)
routes.delete('/client/:id',ClientController.delete)

// product

routes.get('/product',ProductController.index)
routes.post('/product',ProductController.create)
routes.put('/product',ProductController.update)
routes.delete('/product/:id',ProductController.delete)

// sale

routes.get('/sale',SaleController.index)
routes.post('/sale',SaleController.create)
routes.put('/sale',SaleController.update)
routes.delete('/sale/:id',SaleController.delete)

// saleItem

routes.get('/saleItem/:sale_id',SaleItemController.index)
routes.post('/saleItem',SaleItemController.create)
routes.put('/saleItem',SaleItemController.update)
routes.delete('/saleItem/:id',SaleItemController.delete)

// report

routes.get('/report/sale',ReportController.index)

// user

routes.get('/user/:login/:password',UserController.index)
routes.post('/user',UserController.create)
routes.put('/user',UserController.update)
routes.delete('/user/:id',UserController.delete)


module.exports = routes