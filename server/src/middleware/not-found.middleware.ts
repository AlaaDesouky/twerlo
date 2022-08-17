/* -- not-found.middleware.ts --
 *
 * Custom middleware to handle non-existent routes
*/
import { RequestHandler } from 'express'
import { StatusCodes } from 'http-status-codes'

export const notFoundMiddleware: RequestHandler = (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({ success: false, message: 'Route does not exists' })
}