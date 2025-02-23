const History = require("../model/history");
const User = require("../model/user");

// const createHistory = async (req, res) => {
//     const { priorCarrier, expirationDate, lapse, losses } = req.body;
//     const userId = req.body.user;
//     console.log("userId:", userId);
//     try {
//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).send("User not found");
//         }
//         // create a new history document, including the losses as part of the document
//         const history = {
//             priorCarrier,
//             expirationDate,
//             lapse,
//             losses, // Embed losses directly within the history.
//             user: user._id,
//         };
//         const historyInfo = new History(history);
//         await historyInfo.save();
//         res.status(201).json({ _id: historyInfo._id, ...history });
//     } catch (err) {
//         res.status(400).send("Error saving history: " + err);
//     }
// };

const createHistory = async (req, res) => {
    try {
        const { userId } = req.params;
        const historyData = req.body;

        console.log("create history user id:", userId);

        const updatedHistory = await History.findOneAndUpdate(
            userId,
            { ...historyData },
            { new: true, upsert: true, runValidators: true }
        );
        res.status(200).json({ historyId: updatedHistory._id, data: updatedHistory });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}



const getHistory = async (req, res) => {
    try {
        const userId = req.params.userId;
        console.log("get history id:", userId);
        const history = await History.findOne({userId: userId});
        if (!history) {
            return res.status(404).send('History not found');
        }
        res.status(200).send(history);
    } catch (err) {
        res.status(400).send('Error fetching history: ' + err);
    }
};

const updateHistory = async (req, res) => {
    try {
        const history = await History.findById(req.params.id);
        if (!history) {
            return res.status(404).send('History not found');
        }
        Object.keys(req.body).forEach(key => {
            if (req.body[key] !== undefined) {
                history[key] = req.body[key];
            }
        });

        await history.save();
        res.status(200).send(history);
    } catch (err) {
        res.status(400).send('Error updating history: ' + err);
    }
};

const deleteHistory = async (req, res) => {
    try {
        const userId = req.params.user;
        console.log("userId:", userId);
        const deletedHistory = await History.findOneAndDelete({ user: userId });
        if (!deletedHistory) {
            return res.status(404).send("History not found");
        }
        res.status(200).send({ message: "History deleted successfully" });
    } catch (err) {
        res.status(400).send('Error deleting history: ' + err);
    }
};


module.exports = { createHistory, getHistory, updateHistory, deleteHistory };