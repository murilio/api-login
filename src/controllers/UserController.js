const User = require('../models/User')

module.exports = {
  async index (req, res) {
    const users = await User.findAll()
    for (let i = 0; i < users.length; i++) {
      users[i].password = undefined
    }
    return res.status(200).json(users)
  },
  async store (req, res) {
    const { name, email, password } = req.body

    if (await User.findOne({ where: { email } })) {
      return res.status(400).json({ error: 'Usuário já existe' })
    }

    const user = await User.create({ name, email, password })
    user.password = undefined
    return res.status(200).json(user)
  },
  async update (req, res) {
    const { name, email, password } = req.body
    const { id } = req.params

    const user = await User.findByPk(id)

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    await user.update({ name, email, password }, { where: { id } })
    user.password = undefined
    return res.status(200).json(user)
  }

}
