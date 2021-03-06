const Sequelize = require('sequelize')
const configDatabase = require('../config/database')

const User = require('../models/User')

const connection = new Sequelize(configDatabase)

User.init(connection)

module.exports = connection
