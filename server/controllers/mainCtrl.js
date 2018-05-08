const axios = require("axios");
const baseURL = "https://developer.nps.gov/api/v1/";

module.exports = {
  getParkByState: (req, res, next) => {
    const { id } = req.params;
    axios
      .get(
        `${baseURL}parks?stateCode=${id}&api_key=m38xXfA2QlSB63NwgR1JKUj9BqOz5o3bPvAqHuCK`
      )
      .then(response => res.status(200).send(response.data))
      .catch(err => res.status(500).send(err));
  },

  getAllParks: (req, res, next) => {
    axios
      .get(`${baseURL}parks?api_key=m38xXfA2QlSB63NwgR1JKUj9BqOz5o3bPvAqHuCK`)
      .then(response => res.status(200).send(response.data))
      .catch(err => res.status(500).send(err));
  },

  getAlerts: (req, res, next) => {
    const { code } = req.params;
    axios
      .get(
        `${baseURL}alerts?parkCode=${code}&api_key=m38xXfA2QlSB63NwgR1JKUj9BqOz5o3bPvAqHuCK`
      )
      .then(response => res.status(200).send(response.data))
      .catch(err => res.status(500).send(err));
  },

  getUserFavorites: (req, res, next) => {
    const db = req.app.get("db");
    db.favorites
      .get_favorites([req.params.id])
      .then(response => res.status(200).send(response))
      .catch(err => res.status(500).send(err));
  },

  addFavorite: (req, res) => {
    const { fullName, latLong, parkCode, url, description, states } = req.body;
    const db = req.app.get("db");
    db.favorites
      .add_favorite([
        req.user[0].auth_id,
        fullName,
        latLong,
        parkCode,
        url,
        description,
        states
      ])
      .then(response => res.status(200).send(response))
      .catch(err => res.status(500).send(err));
  },

  removeFavorite: (req, res) => {
    const db = req.app.get("db");
    db.favorites
      .remove_favorite([req.query.id, req.query.parkCode])
      .then(response => res.status(200).send(response))
      .catch(err => res.status(500).send(err));
  },

  addHistory: (req, res) => {
    const db = req.app.get("db");
    const { name, date, image, notes } = req.body;
    db.history
      .add_history([req.user[0].auth_id, name, date, image, notes])
      .then(response => res.status(200).send(response))
      .catch(err => res.status(500).send(err));
  },

  getAllHistory: (req, res) => {
    const db = req.app.get("db");
    db.history
      .get_all_history([req.params.id])
      .then(response => res.status(200).send(response))
      .catch(err => res.status(500).send(err));
  }
};
