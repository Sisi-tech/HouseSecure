const express = require("express");
const router = express.Router();
const {
    createLocation,
    getLocation,
    updateLocation,
    deleteLocation,
} = require("../controller/locationController");

router.post('/', createLocation);
router.get('/:userId', getLocation);
router.put('/:id', updateLocation);
router.delete('/:id', deleteLocation);

module.exports = router;