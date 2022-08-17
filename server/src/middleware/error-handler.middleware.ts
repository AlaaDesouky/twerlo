/* -- error-handler.middleware.ts --
 *
 * Custom middleware to handle request errors
*/
import { ErrorRequestHandler } from 'express'
import { StatusCodes } from 'http-status-codes'

export const errorHandlerMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  const defaultError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || 'Something went wrong, try again later'
  }

  res.status(defaultError.statusCode).json({ success: false, message: defaultError.message })
}