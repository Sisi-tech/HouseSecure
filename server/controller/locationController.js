const Location = require("../model/location");
const User = require("../model/user");
const mongoose = require("mongoose");

// const createLocation = async (req, res) => {
//     const { address1, address2, zipCode, city, state, distanceToCoast, rental, numOfFamily, townhouse, sqft, constructionType, protectionClass, yearBuilt } = req.body;
//     const userId = req.body.user;
//     console.log("userId to create location:", userId);
//     try {
//         if (!userId) {
//             return res.status(404).send('User not found');
//         }
//         const location = new Location({
//             address1,
//             address2, 
//             zipCode,
//             city,
//             state,
//             distanceToCoast,
//             rental,
//             numOfFamily,
//             townhouse,
//             sqft,
//             constructionType,
//             protectionClass,
//             yearBuilt,
//             user: userId,
//         });
//         await location.save();
//         res.status(201).json({ locationId: location._id })
//     } catch (err) {
//         res.status(400).send('Error saving location: ' + err);
//     }
// };

const createLocation = async (req, res) => {
    try {
        const { userId } = req.params;
        const locationData = req.body;

        const updatedLocation = await Location.findOneAndUpdate(
            userId,
            { ...locationData },
            { new: true, upsert: true, runValidators: true }
        );
        res.status(200).json({ locationId: updatedLocation._id, data: updatedLocation });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// const getLocation = async (req, res) => {
//     try {
//         const location = await Location.findOne({ user: req.params.userId });
//         if (!location) {
//             return res.status(404).send('Location not found');
//         }
//         res.status(200).send(location);
//     } catch (err) {
//         res.status(400).send('Error fetching location: ' + err);
//     }
// };

const getLocation = async (req, res) => {
    try {
        const userId = req.params.user;
        console.log("get location user id:", userId);
        const location = await Location.findOne({ userId: userId });

        if (!location) {
            return res.status(404).json({ message: "Location not found for this user" });
        }
        res.status(200).json(location);
    } catch (error) {
        res.status(500).json({ message: 'Server error', message: error.message });
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

const deleteLocation = async (req, res) => {
    try {
        const location = await Location.findByIdAndDelete(req.params.id);
        if (!location) {
            return res.status(404).json({ message: "location not found"});
        }
        res.status(200).json({ message: "Location successfully deleted"});
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
}

module.exports = { createLocation, getLocation, updateLocation, deleteLocation };
