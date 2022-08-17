/* -- server.ts --
 *
 * Starting point of the application using an async IIFE.
 * Marks as async to handle future async operations like connecting to a database.
*/

import * as dotenv from 'dotenv'

(async () => {
  // Using environment variables
  dotenv.config()

  try {
    // FLU::Connection to Database when exists

    // Initialize new server
    const App = require('./src/app.express').default;
    const server = new App();
    server.listen();

  } catch (error) {
    console.log('Something went wrong: \n', error.stack)
  }
})()
