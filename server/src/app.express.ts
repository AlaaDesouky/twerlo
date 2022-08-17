/* -- app.express.ts --
 *
 * Create Express server
*/

import * as express from 'express'
import { environment } from './config'
import { errorHandlerMiddleware, notFoundMiddleware } from './middleware';
import { v1Router } from './routes';
import * as cors from 'cors'

export default class App {
  constructor(private app: express.Application) {
    // Initialize a new express app
    this.app = express();
    this.app.use(express.json())
    this.app.use(cors())
    this.setApp()
  }

  // Setting up the router and middleware
  setApp() {
    // Use v1 routes as default endpoints
    this.app.use('/api/v1', v1Router)

    // Apply custom middleware
    this.app.use(notFoundMiddleware)
    this.app.use(errorHandlerMiddleware)
  }

  listen() {
    const { port } = environment;
    this.app.listen(port, () => console.log(`Listening on port ${port}`))
  }
}