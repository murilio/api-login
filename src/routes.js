const express = require('express')
const multer = require('multer')
const multerConfig = require('./config/multer')

// middlewares
const authMiddleware = require('./middlewares/auth')

// controllers
const AuthController = require('./controllers/AuthController')
const UserController = require('./controllers/UserController')
const ProductController = require('./controllers/ProductController')
const CartController = require('./controllers/CartController')

const routes = express.Router()

routes.get('/', (req, res) => {
    res.json({ home: 'ok' })
})

// login
routes.post('/login', AuthController.login)
routes.post('/users', UserController.store)

routes.use(authMiddleware)

// profile
routes.get('/profile/:user_id', AuthController.profile)

// products
routes.post('/products', multer(multerConfig).single('file'), ProductController.store)
routes.get('/products', ProductController.index)

// users
routes.get('/users', UserController.index)
routes.put('/users/:id', UserController.update)

routes.get('/carrinho/:user_id/', CartController.indexproduct)
routes.post('/carrinho/adicionar/:user_id/:product_id', CartController.addproduct)
routes.delete('/carrinho/remover/:user_id/:product_id', CartController.removeproduct)

module.exports = routes
