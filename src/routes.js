const express = require('express')
// middlewares
const authMiddleware = require('./middlewares/auth')
// controllers
const UserController = require('./controllers/UserController')
const ProductController = require('./controllers/ProductController')
const AuthController = require('./controllers/AuthController')

const routes = express.Router()

// login
routes.post('/login', AuthController.login)
routes.post('/users', UserController.store)

routes.use(authMiddleware)

// profile
routes.get('/profile/:user_id', AuthController.profile)

// products
routes.post('/add/products', ProductController.store)
routes.get('/products', ProductController.index)

// users
routes.get('/users', UserController.index)

routes.get('/cart/:user_id/', ProductController.indexproduct)
routes.post('/add/cart/:user_id/:product_id', ProductController.addproduct)
routes.delete('/remove/cart/:user_id/:product_id', ProductController.removeproduct)

module.exports = routes
