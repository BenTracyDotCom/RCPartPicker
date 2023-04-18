import axios from 'axios'
const controllers = require('../../db/controllers')

export default {
  addPart: controllers.addPart,
  getBuilds: controllers.getBuilds
}