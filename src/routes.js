const routes = require('express').Router()

// middlewares
const authMiddleware = require('./middlewares/auth')

// controllers
const AuthController = require('./controllers/AuthController')
const UserController = require('./controllers/UserController')

// login
routes.post('/login', AuthController.login)
routes.post('/users', UserController.store)

routes.use(authMiddleware)

// users
routes.get('/users', UserController.index)
routes.put('/users/:id', UserController.update)

module.exports = routes
