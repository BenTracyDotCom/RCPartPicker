import axios from 'axios';

const api = {
  addPart: (formData: Object) => {
    let payload = formData;
    let options = {
      method: 'POST',
      url: window.location + 'api/parts',
      data: payload
    }
    return axios(options)
  },
  getBuilds: (username: String) => {
    let options = {
      method: 'GET',
      url: window.location + `api/builds/${username}`
    }
    return axios(options)
  },
  validateUser: (userInfo:{email:String, password:String}) => {
    let payload = userInfo
    let options = {
      method: 'POST',
      url: window.location + `api/users`,
      data: payload
    }
    return axios(options)
  },
  getProducts: (type: String) => {
    let options = {
      method: 'GET',
      url: window.location + `api/products/${type}`
    }
    return axios(options)
  }
}

export default api