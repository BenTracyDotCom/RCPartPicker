import axios from 'axios';
import path from 'path';

export default {
  addPart: (formData: Object) => {
    let payload = formData;
    let options = {
      method: 'POST',
      url: path.join(__dirname, '/api/parts'),
      data: payload
    }
    return axios(options)
  },
  getBuilds: (username: String) => {
    let options = {
      method: 'GET',
      url: path.join(__dirname, `/api/builds/${username}`)
    }
    return axios(options)
  },
  validateUser: (userInfo:{email:String, password:String}) => {
    let payload = userInfo
    let options = {
      method: 'POST',
      url: path.join(__dirname, `/api/users`),
      data: payload
    }
    return axios(options)
  }
}