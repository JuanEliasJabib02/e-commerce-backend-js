/**
 * 2.2 Use only the built-in Error object - nodebestpractices
 * 2.3 Distinguish operational vs programmer errors - nodebestpractices
 */

class AppError extends Error {
    constructor(message,statusCode,isOperational) {
        super(message);
        this.message = message;
        this.statusCode = statusCode
        this.isOperational = isOperational || false

        Error.captureStackTrace(this,this.constructor);
    }
}

module.exports = { AppError };