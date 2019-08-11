
const axios = require('axios');

const URL = "http://localhost:3000/";
const HEADERS = { 'Authorization': 'Token "0216e2a5ae26a98de75dbfc4a353182a"' };


const apiService = {
  getData: (category) => {
    return axios.get(`${URL}${category}`, { headers: HEADERS })
      .then(res => {
        console.log('GET the data', res.data)
        return res.data
      })
  },

  deleteData: (pathAndId) => {
    console.log("Deleted")
    return axios.delete(`${URL}${pathAndId}`, { headers: HEADERS })
      .then(res => {
        console.log('Delete data', res.data)
        return res.data
      })
  },

  editData: (item) => {
    console.log("Edit this: ", item)
    // should be item.title
    const form = {
      specialty: {
        title: item.title,
        description: item.description,
        price: item.price
      }
    }
    const pathAndId = 99999;
    return axios.delete(`${URL}${pathAndId}`, { headers: HEADERS }, form)
      .then(res => {
        console.log('Delete data', res.data)
        return res.data
      })
  },
  newData: (item) => { },
  logIn: () => { },
  logOut: () => { }
}

export default apiService;
