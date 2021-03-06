const express = require('express');

const router = express.Router();

const locationControllers = require('../controllers/locations');
const auth = require('../middlewares/auth');

router
  .post('/', auth, locationControllers.createLocation)
  .get('/', locationControllers.getLocations);

module.exports = router;
