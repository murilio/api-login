const Product = require('../models/Product')
const User = require('../models/User')

module.exports = {
    async addproduct(req, res) {
        const { user_id, product_id } = req.params 
        const user = await User.findByPk(user_id)

        if(!user) {
            return res.status(400).json({ error: 'Usuário não existe' })
        }

        const product = await Product.findByPk(product_id)

        user.addProduct(product)

        return res.status(200).json(product)

    },
    async removeproduct(req, res) {
        const { user_id, product_id } = req.params 
        const user = await User.findByPk(user_id)

        if(!user) {
            return res.status(400).json({ error: 'Usuário não existe' })
        }

        const product = await Product.findByPk(product_id)

        await user.removeProduct(product)

        return res.status(200).json({ status: 'Produto removido' })

    },
    async indexproduct(req, res) {
        const { user_id } = req.params 

        const user = await User.findByPk(user_id, {
            include: {
                association: 'products'
            }
        })

        const count = user.products.length
        const products = user.products

        return res.status(200).json({products, count})
    }
}