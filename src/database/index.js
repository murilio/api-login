const Sequelize = require('sequelize')
const configDatabase = require('../config/database')

const User = require('../models/User')
const Product = require('../models/Product')

const connection = new Sequelize(configDatabase)

User.init(connection)
Product.init(connection)

User.associate(connection.models)
Product.associate(connection.models)

module.exports = connection
