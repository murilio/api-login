const { Model, DataTypes } = require('sequelize')

class Product extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            value: DataTypes.STRING,
            category: DataTypes.STRING,
            filename: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsToMany(models.User, { 
            foreignKey: 'product_id',
            through: 'user_products',
            as: 'users'
        })
    }

}

module.exports = Product
