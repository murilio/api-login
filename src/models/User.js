const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const configAuth = require('../config/auth')

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
        }, {
            sequelize,
            hooks: {
                beforeCreate: async (user, options) => {
                    const hash = await bcrypt.hashSync(user.password, 10)
                    user.password = hash
                }
            },
        })
    }

    static associate(models) {
        this.belongsToMany(models.Product, { 
            foreignKey: 'user_id',
            through: 'user_products',
            as: 'products'
        })
    }

    generateToken() {
        return jwt.sign({ id: this.id }, configAuth.secret, {
            expiresIn: 86400
        })
    }

}

module.exports = User