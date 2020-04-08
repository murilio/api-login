const User = require('../models/User')
const bcrypt = require('bcryptjs')

module.exports = {
    async login(req, res) {
        const { email, password } = req.body

        const user = await User.findOne({ where: { email } })

        if(!user) {
            return res.status(400).json({ error: 'Email inválido' })
        }

        if(!await bcrypt.compareSync(password, user.password)) {
            return res.status(400).json({ error: 'Senha inválida' })
        }

        user.password = undefined

        const token = user.generateToken()
        return res.status(200).json({ user, token })

    },

    async profile(req, res) {
        const { user_id } = req.params

        const user = await User.findByPk(user_id)

        user.password = undefined

        return res.json(user)

    }
}
