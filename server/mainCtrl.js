const axios = require('axios')
const baseURL = 'https://developer.nps.gov/api/v1/'

module.exports = {
  getParkByState: (req, res, next) => {
    const {id} = req.params
    axios.get(`${baseURL}parks?stateCode=${id}&api_key=m38xXfA2QlSB63NwgR1JKUj9BqOz5o3bPvAqHuCK`)
      .then(response => res.status(200).send(response.data))
      .catch(err => res.status(500).send(err))
  },

  getAlerts: (req, res, next) => {
    const {code} = req.params
    console.log(code);
    
    axios.get(`${baseURL}alerts?parkCode=${code}&api_key=m38xXfA2QlSB63NwgR1JKUj9BqOz5o3bPvAqHuCK`)
      .then(response => res.status(200).send(response.data))
      .catch(err => res.status(500).send(err))
  }
}
