import axios from 'axios'
const model =require('../../db/models')

export default {
  addPart: model.addPart,
  getBuilds: model.getBuilds,
  validateUser: model.validateUser
}