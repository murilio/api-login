const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const configAuth = require('../config/auth')

class User extends Model {
  static init (sequelize) {
    super.init({
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      sequelize,
      hooks: {
        beforeCreate: async (user, options) => {
          const hash = await bcrypt.hashSync(user.password, 10)
          user.password = hash
        }
      }
    })
  }

  generateToken () {
    return jwt.sign({ id: this.id }, configAuth.secret, {
      expiresIn: 86400
    })
  }
}

module.exports = User
