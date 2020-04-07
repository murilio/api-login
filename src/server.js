require('dotenv').config()

const express = require("express")
const routes = require('./routes')
const cors = require('cors')

require('./database')

const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    origin: 'https://webshopsogo.herokuapp.com/'
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(process.env.PORT || 3001, () => {
    console.log('server running...')
})
