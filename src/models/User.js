const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcryptjs')

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
}

module.exports = User