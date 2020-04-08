require('dotenv').config()

const express = require("express")
const routes = require('./routes')
const cors = require('cors')

require('./database')

const app = express()

app.use(cors({
    origin: 'https://webshopsogo.herokuapp.com/',
}))
app.use(express.json({
    limit: '50mb'
}))
app.use(express.urlencoded({ 
    limit: '50mb',
    extended: true 
}))

app.use(routes)

app.listen(process.env.PORT || 3001, () => {
    console.log('Server running...')
})
