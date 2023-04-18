require('./models')
require('./controllers')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI)

module.exports = {
  model: model,
  controllers: controllers
}