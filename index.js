const debug = require('debug')('app:startup')
const config = require('config')
const morgan = require('morgan')
const helmet = require('helmet')
const express = require('express')
const logger = require('./middleware/logger')
const auth = require('./middleware/auth')
const app = express()

const port = process.env.PORT || 3001

console.log(`Node env: ${process.env.NODE_ENV}`)
console.log(`NODE_ENV: ${app.get('env')}`)

// Middleware
app.set('view engine', 'pug')

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(helmet())
app.use(express.static('public'))

if(app.get('env') === 'development') {
    app.use(morgan('tiny'))
    debug('Morgan enable...')
}

// Routes

// Configuration
console.log('Application name: ' + config.get('name'))
console.log('Application mail server: ' + config.get('mail.host'))
console.log("Application mail password: " + config.get('mail.password'))


app.listen(port, ()=> console.log(`App listening on port http://localhost:${port}`))




