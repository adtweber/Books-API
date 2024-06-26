// DEPENDENCIES
const express = require('express')
// const mongoose = require('mongoose')
// const methodOverride = require('method-override')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
// app.set('views', __dirname + '/views')
// app.set('view-engine', 'jsx')
// app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
// app.use(methodOverride('_methos'))


// CONTROLLERS
app.use('/books', require('./controllers/books_controller.js'))

app.get('/', (req, res) => {
    res.send('<h1>Hello from Books API</h1>')
})

// app.get('*', (req, res) => {
//     res.render('error404')
// })

// Listen for Connections
app.listen(PORT, () => console.log("App is running!"))