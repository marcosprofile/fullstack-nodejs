/* const { Person } = require('./person.js')

require('./modules/path.js')
require('./modules/fs')
require('./modules/http.js')

const person = new Person('Marcos') */

const dotenv = require('dotenv')
const connectToDatabase = require('./src/database/connect.js')

dotenv.config()
connectToDatabase()

require('./modules/express.js')