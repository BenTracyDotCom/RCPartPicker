require('./models')

const controllers = {

  register: (req, res) => {
    model.registerUser(req.body)
    .then(results => {
      res.status(204).send(results)
    })
  },
  addPart: (req, res) => {
    model.addPart(req.body)
    .then(data => res.status(204).send(data))
    .catch(err => res.send(err))
  },
  getBuilds: (req, res) => {
    model.getBuilds(req.body)
    .then(data => res.status(200).send(data))
    .catch(err => res.send(err))
  }

}

module.exports = controllers;