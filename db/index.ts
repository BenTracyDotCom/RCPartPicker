import * as mongoose from 'mongoose'
import model from './models';
import controllers from './controllers';

mongoose.connect(process.env.MONGODB_URI)

const db = {
  model: model,
  controllers: controllers
}

export default db;