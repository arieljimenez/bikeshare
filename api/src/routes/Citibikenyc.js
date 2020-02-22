const { Router } = require('express');
const axios = require('axios');

const router = Router();

// TODO: create a basic controller and inherit the basic crud
router.get('/', async function(req, res) {
  try {
    const response = await axios.get(
      "https://feeds.citibikenyc.com/stations/stations.json"
    );

    res.status(201).json({ success: true, results: response.data.stationBeanList });
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message });
  }
});

module.exports = router;
