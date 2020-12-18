const jwt = require('jsonwebtoken')
const configAuth = require('../config/auth')

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Token não informado' })
  }

  const parts = authHeader.split(' ')

  if (!parts.length === 2) {
    return res.status(401).json({ error: 'Token invalido' })
  }

  const [scheme, token] = parts

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({ error: 'Token mal formatado' })
  }

  jwt.verify(token, configAuth.secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token invalido' })
    }
    req.userId = decoded.id
    return next()
  })
}
