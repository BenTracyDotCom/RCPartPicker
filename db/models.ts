require('./db')
require('password-salt-and-hash').saltHash

const model = {
  getUser: (user:{
    username: String,
    email: String,
    password: String,
    builds: Object[],
  }) => {
    return db.User.findOne({
      email: user.email
    })
  },
  registerUser: (user:{
    username: String,
    email: String,
    password: String,
    builds: Object[],
  }) => {
    db.User.findOne({
      email: user.email
    })
    .catch(() => {
      const newUser = new db.User({
        username: user.username
      })
    })
    .then(data => console.log(data))
  },
  addPart: (part:{
    name: String,
    type: String,
    data: Object,
    photoUrl: String,
    prices: {
      host: String,
      url: String,
      price: String
    }[]
  }) => {
    const newPart = new db.Part({
      name: part.name,
      type: part.type,
      data: part.data,
      photoUrl: part.photoUrl,
      prices: part.prices
    })
    return newPart.save()
  }
}

module.exports = model