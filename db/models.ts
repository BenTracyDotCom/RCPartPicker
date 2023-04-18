const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  builds: Array
})

const partSchema = new mongoose.Schema({
  name: String,
  type: String,
  data: Object,
  photoUrl: String,
  prices: {
    type: [{
    host: String,
    url: String,
    price: String
   }],
   required: true
  }
})

const buildSchema = new mongoose.Schema({
  name: String,
  owner: String,
  components: Array
})

const model = {
  user: mongoose.model('User', userSchema),
  part: mongoose.model('Part', partSchema),
  build: mongoose.model('Build', buildSchema)

}

module.exports = model