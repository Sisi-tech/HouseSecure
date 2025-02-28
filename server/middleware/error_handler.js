const CustomAPIError = require("../errors/custom_api");
const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message });
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err: err.message || 'Internal Server Error' });
};

module.exports = errorHandlerMiddleware;

