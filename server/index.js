require("dotenv").config({ path: "../.env"});
const connectDB = require("./db/connect");
const app = require('./app');

const PORT = process.env.PORT || 5001;


const listener = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}...`);
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};


listener();
