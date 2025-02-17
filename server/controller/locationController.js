const Location = require("../model/location");
const User = require("../model/user");

const createLocation = async (req, res) => {
    const { address1, address2, zipCode, city, state, distanceToCoastal, rental, numOfFamily, townhouse, sqft, constructionType, protectionClass, yearBuilt, userId } = req.body;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send('User not found');
        }
        const location = new Location({
            address1,
            address2, 
            zipCode,
            city,
            state,
            distanceToCoastal,
            rental,
            numOfFamily,
            townhouse,
            sqft,
            constructionType,
            protectionClass,
            yearBuilt,
            user: user._id,
        });
        await location.save();
        res.status(201).send(location);
    } catch (err) {
        res.status(400).send('Error saving location: ' + err);
    }
};

const getLocation = async (req, res) => {
    try {
        const location = await Location.findOne({ user: req.params.userId });
        if (!location) {
            return res.status(404).send('Location not found');
        }
        res.status(200).send(location);
    } catch (err) {
        res.status(400).send('Error fetching location: ' + err);
    }
};

const updateLocation = async (req, res) => {
    const { address1, address2, zipCode, city, state, distanceToCoastal, rental, numOfFamily, townhouse, sqft, constructionType, protectionClass, yearBuilt } = req.body;
    try {
        const location = await Location.findById(req.params.id);
        if (!location) {
            return res.status(404).send('Location not found');
        }
        Object.assign(location, req.body);
        await location.save();
        res.status(200).send(location);
    } catch (err) {
        res.status(400).send({ message: 'Error updating location', error: err.message});
    }
};

module.exports = { createLocation, getLocation, updateLocation };
