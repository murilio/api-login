const Product = require('../models/Product')

module.exports = {
    async index(req, res) {
        const products = await Product.findAll()
        return res.status(200).json(products)
    },

    async store(req, res){

        const { filename } = req.file
        const { name, description, value, category } = req.body

        if( await Product.findOne({ where: { name } }) ) {
            return res.status(400).json({ error: 'Produto já existe' })
        }

        const product = await Product.create({ name, description, value, category, filename })

        return res.status(200).json(product)

    }
}
