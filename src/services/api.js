const axios = require('axios');
const URL = process.env.REACT_APP_URL
const token = localStorage.token
var HEADERS = {
  'Authorization': `Token ${token}`,
  'Content-Type': 'application/json'
};

// TODO: No error handling no good

const apiService = {
  getData: (category, token) => {
    return axios.get(`${URL}${category}`, { headers: HEADERS })
      .then(res => {
        console.log('GET the data', res.data)
        return res.data
      })
  },

  deleteData: (path) => {
    console.log("Deleted")
    return axios.delete(`${URL}${path}`, { headers: HEADERS })
      .then(res => {
        console.log('Delete data', res.data)
        return res.data
      })
  },

  editData: (item) => {
    const options = {
      method: 'patch',
      url: `${URL}${item.route}/${item.itemId}`,
      headers: HEADERS,
      data: {
        [item.model]: {
          title: item.title,
          description: item.description,
          price: item.price
        }
      }
    }
    return axios(options)
      .then(res => {
        return res.data
      })
  },
  newData: (item) => {
    const options = {
      method: 'post',
      url: `${URL}${item.route}`,
      headers: HEADERS,
      data: {
        [item.model]: {
          title: item.title,
          description: item.description,
          price: item.price
        }
      }
    }
    return axios(options)
      .then(res => {
        return res.data
      })
  },
  login: (user) => {
    const options = {
      method: 'post',
      url: `${URL}login`,
      headers: { 'Content-Type': 'application/json' },
      data: {
        users_information: {
          email: user.email,
          password: user.password
        }
      }
    }
    return axios(options)
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      })
  },
  logout: () => {
    const options = {
      method: 'post',
      url: `${URL}logout`,
      headers: HEADERS,
    }
    return axios(options)
      .then(res => {
        localStorage.clear()
        return res;
      })
      .catch(err => {
        return err;
      })
  }
}

export default apiService;
