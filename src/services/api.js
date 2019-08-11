
const axios = require('axios');

const URL = "http://localhost:3000/";
const HEADERS = { 'Authorization': 'Token "0216e2a5ae26a98de75dbfc4a353182a"' };


const apiService = {
  // --------------------------------
  //  get all trainings
  // --------------------------------
  getData: (category) => {
    return axios.get(`${URL}${category}`, { headers: HEADERS })
      .then(res => {
        console.log('GET the data', res.data)
        return res.data
      })
  },

  deleteData: (pathAndId) => {
    console.log("did this work")
    return axios.delete(`${URL}${pathAndId}`, { headers: HEADERS })
      .then(res => {
        console.log('Delete data', res.data)
        return res.data
      })
  },

  editData: (item) => { },
  newData: (item) => { },
  logIn: () => { },
  logOut: () => { }
}

export default apiService;
