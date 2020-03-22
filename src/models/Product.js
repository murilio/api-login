const { Model, DataTypes } = require('sequelize')

class Product extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            value: DataTypes.STRING,
            category: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Product
