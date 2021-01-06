const routes = require('express').Router()

// middleware
const authMiddleware = require('./middleware/auth')

// controllers
const AuthController = require('./controllers/AuthController')
const UserController = require('./controllers/UserController')

// login
routes.get('/login', AuthController.login)
routes.post('/users', UserController.store)
routes.post('/loginOrCreate', AuthController.loginOrCreate)

routes.use(authMiddleware)

// users
routes.get('/users', UserController.index)
routes.put('/users/:id', UserController.update)

module.exports = routes
