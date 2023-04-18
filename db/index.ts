import * as mongoose from 'mongoose'
import model from './models.js';
import controllers from './controllers.js';

const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/rcpartpicker"

mongoose.connect(uri)

const db = {
  model: model,
  controllers: controllers
}

export default db;