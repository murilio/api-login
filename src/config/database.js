module.exports = {
    dialect: 'postgres',
    host: process.env.HOST,
    database: process.env.DATABASE,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    define: {
        timestamps: true,
        underscored: true
    }
}

// module.exports = {
//     dialect: 'postgres',
//     host: 'localhost',
//     database: 'apishop',
//     username: 'admin',
//     password: 'admin',
//     define: {
//         timestamps: true,
//         underscored: true
//     }
// }