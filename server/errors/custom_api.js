const { METHOD_FAILURE } = require("http-status-codes");

class CustomAPIError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 400;
    }
}

module.exports = CustomAPIError;