const History = require("../model/history");
const User = require("../model/user");

const createHistory = async (req, res) => {
    const { priorCarrier, expirationDate, lapse, losses, userId } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send("User not found");
        }
        // create a new history document, including the losses as part of the document
        const history = new History({
            priorCarrier,
            expirationDate,
            lapse,
            losses, // Embed losses directly within the history.
            user: user._id,
        });
        await history.save();
        res.status(201).send(history);
    } catch (err) {
        res.status(400).send("Error saving history: " + err);
    }
};

const getHistory = async (req, res) => {
    try {
        const history = await History.findOne({ user: req.params.userId });
        if (!history) {
            return res.status(404).send('History not found');
        }
        res.status(200).send(history);
    } catch (err) {
        res.status(400).send('Error fetching history: ' + err);
    }
};

const updateHistory = async (req, res) => {
    const { priorCarrier, expirationDate, lapse, losses } = req.body;
    try {
        const history = await History.findById(req.params.id);
        if (!history) {
            return res.status(404).send('History not found');
        }
        history.priorCarrier = priorCarrier || history.priorCarrier;
        history.expirationDate = expirationDate || history.expirationDate;
        history.lapse = lapse || history.lapse;

        if (losses) {
            history.losses = losses;
        }
        await history.save();
        res.status(200).send(history);
    } catch (err) {
        res.status(400).send('Error updating history: ' + err);
    }
};

const deleteHistory = async (req, res) => {
    try {
        const history = await History.findById(req.params.id);
        if (!history) {
            return res.status(404).send("History not found");
        }
        await history.remove();
        res.status(200).send('History deleted');
    } catch (err) {
        res.status(400).send('Error deleting history: ' + err);
    }
};


module.exports = { createHistory, getHistory, updateHistory, deleteHistory };