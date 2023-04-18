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
  }

}

export default controllers;