// module.exports = {
//   dialect: 'postgres',
//   host: process.env.HOST,
//   database: process.env.DATABASE,
//   username: process.env.USERNAME,
//   password: process.env.PASSWORD,
//   define: {
//     timestamps: true,
//     underscored: true
//   }
// }

const path = require('path')

module.exports = {
  dialect: 'sqlite',
  storage: path.resolve(__dirname, '..', 'database', 'db.sqlite'),
  define: {
    timestamps: true,
    underscored: true
  }
}
