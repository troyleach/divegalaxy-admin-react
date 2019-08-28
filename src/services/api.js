const axios = require('axios');
const URL = process.env.REACT_APP_URL
var HEADERS = { 'Authorization': `Token ${process.env.REACT_APP_HEADERS}` };

const apiService = {
  getData: (category) => {
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
        console.log('updated stuff YO data', res.data)
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
        console.log('updated stuff YO data', res.data)
        return res.data
      })
  },
  logIn: () => { },
  logOut: () => { }
}

export default apiService;
