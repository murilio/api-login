const User = require('../models/User')
const bcrypt = require('bcryptjs')

module.exports = {
  async login (req, res) {
    const [, hash] = req.headers.authorization.split(' ')
    const [email, password] = Buffer.from(hash, 'base64').toString().split(':')

    const user = await User.findOne({ where: { email } })

    if (!user) {
      return res.status(400).json({ error: 'Email inválido' })
    }

    if (!await bcrypt.compareSync(password, user.password)) {
      return res.status(400).json({ error: 'Senha inválida' })
    }

    const token = user.generateToken()
    return res.status(200).json({ user, token })
  }
}
