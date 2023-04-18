require('./db/db');
const saltHash = require('password-salt-and-hash').saltHash

let hashPassword = saltHash.generateSaltHash('Pineapple33!')

console.log(hashPassword)

let Admin = new db.User({
  username: "brengeley",
  email: "b.rob.tracy@gmail.com",
  hashPassword: hashPassword,
  builds: [],
  isLoggedIn: true
})

Admin.save()
