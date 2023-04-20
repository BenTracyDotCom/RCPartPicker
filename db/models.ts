import db from './db.js';
//import saltHash from 'password-salt-and-hash'

const model = {
  getUser: (user: {
    username: String,
    email: String,
    password: String,
    builds: Object[],
  }) => {
    return db.User.findOne({
      email: user.email
    })
  },
  registerUser: (user: {
    username: String,
    email: String,
    password: String,
    builds: Object[],
  }) => {
    return db.User.findOne({
      email: user.email
    })
  },
  addPart: (part: {
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
  },
  getBuilds: (username: String) => {
    return db.Build.find({
      owner: username
    })
  },
  getBuild: (username: String, name: String) => {
    return db.Build.findOne({
      owner: username,
      name: name
    })
  },
  updateBuild: (build:{name: String, owner: String, components: {}[]}) => {
    return db.Build.findOneAndUpdate({name: build.name, owner: build.owner}, {components: build.components}, {new: true})
  },
  validateUser: async (userInfo: {
    email: String, password: String
  }) => {
    return db.User.findOne({
      email: userInfo!.email!
    })
  },
  deleteBuild: (build: {name: String, owner: String}) => {
    return db.Build.findOneAndDelete({name: build.name, owner: build.owner})
  },
  getProducts: (type: String) => {
    return db.Part.find({
      type: type
    })
  },
  saveBuild: (build: {name: string, owner: string, components: object[]}) => {
    const newOne = new db.Build({
      name: build.name,
      owner: build.owner,
      components: build.components
    })
    return newOne.save()
  }
}

export default model