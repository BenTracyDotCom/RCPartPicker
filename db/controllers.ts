require('./models')

const controllers = {

  register: (req, res) => {
    model.registerUser(req.body)
  }

}

module.exports = controllers;