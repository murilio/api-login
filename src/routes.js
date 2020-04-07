const express = require('express')
const multer = require('multer')
const multerConfig = require('./config/multer')
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
routes.get('/', UserController.index)

routes.use(authMiddleware)

// profile
routes.get('/profile/:user_id', AuthController.profile)

// products
routes.post('/add/products', multer(multerConfig).single('file'), ProductController.store)
routes.get('/products', ProductController.index)

// users
routes.get('/users', UserController.index)

routes.get('/cart/:user_id/', ProductController.indexproduct)
routes.post('/add/cart/:user_id/:product_id', ProductController.addproduct)
routes.delete('/remove/cart/:user_id/:product_id', ProductController.removeproduct)

module.exports = routes
