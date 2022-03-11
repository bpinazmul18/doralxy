const debug = require('debug')('app:startup')
const config = require('config')
const morgan = require('morgan')
const helmet = require('helmet')
const express = require('express')
const app = express()

// PORT
const port = process.env.PORT || 3001

// Middleware
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(helmet())
app.use(express.static('public'))

// Logger
if(app.get('env') === 'development') {
    app.use(morgan('tiny'))
    debug('Morgan enable...')
}

app.listen(port, ()=> console.log(`App listening on port http://localhost:${port}`))




