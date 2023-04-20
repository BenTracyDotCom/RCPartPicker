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
        model.getBuilds(data!.username!)
          .then((data) => {
            res.status(202).send(data)
          })
      })
      .catch(() => res.status(401).end())
  },
  getProducts: (req: express.Request, res: express.Response) => {
    model.getProducts(req.params.type)
      .then((data) => {
        res.status(200).send(data)
      })
      .catch(() => {
        res.status(400).end()
      })
  },
  saveBuild: (req: express.Request, res: express.Response) => {
    model.getBuild(req.body.owner, req.body.name)
      .then(() => {
        model.updateBuild(req.body)
        .then((data: any) => {
          if (!!data) {
            res.status(204).send(data)
          } else {
            model.saveBuild(req.body)
              .then(() => res.status(201).end())
              .catch(res.send)
          }
        })
      })
  },
  deleteBuild: (req: express.Request, res: express.Response) => {
    model.deleteBuild(req.body)
    .then(() => res.status(204).end())
  }
}

export default controllers;