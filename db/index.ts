const models = require('./models')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI)