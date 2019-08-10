
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
        console.log('here i am in the data', res.data)
        return res.data
        // this.setState({ data: res.data }); callback?
      })
  },

  postTraining: () => {
    console.log("did this work")
    // do some stuff;
  }
}

export default apiService;
