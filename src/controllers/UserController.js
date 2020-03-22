const User = require('../models/User')

module.exports = {
    async index(req, res) {
        const users = await User.findAll()
        for(let i = 0; i < users.length; i++) {
            users[i].password = undefined
        }
        return res.status(200).json(users)
    },

    async store(req, res) {
        const { name, email, password } = req.body

        if ( await User.findOne({ where: { email } }) ) {
            return res.status(400).json({ error: 'Usuário já existe' })
        }

        const user = await User.create({ name, email, password })
        user.password = undefined
        return res.status(200).json(user)
 
    }
}