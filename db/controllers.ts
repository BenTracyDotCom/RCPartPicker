import model from './models.js';
import express from 'express';

const controllers = {

  register: (req: express.Request, res: express.Response) => {
    model.registerUser(req.body)
      .then(results => {
        res.status(204).send(results)
      })
  },
  addPart: (req: express.Request, res: express.Response) => {
    model.addPart(req.body)
      .then(data => res.status(204).send(data))
      .catch(err => res.send(err))
  },
  getBuilds: (req: express.Request, res: express.Response) => {
    model.getBuilds(req.body)
      .then(data => res.status(200).send(data))
      .catch(err => res.send(err))
  },
  validateUser: async (req: express.Request, res: express.Response) => {
    model.validateUser(req.body)
      .then((data) => {
        console.log(data, 'username')
        model.getBuilds(data!.username!)
        .then((data) => {
          console.log(data, 'builds')
          res.status(202).send(data)
        })
      })
      .catch(() => res.status(401).end())
  }
}

export default controllers;