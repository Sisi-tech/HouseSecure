const express = require("express");
const router = express.Router();
const {
    createLocation,
    getLocation,
    updateLocation,
} = require("../controller/locationController");

router.post('/', createLocation),
router.get('/:userId', getLocation),
router.put('/:id', updateLocation);

module.exports = router;