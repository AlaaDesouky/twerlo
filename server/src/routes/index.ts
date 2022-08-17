/* -- routes/index.ts --
 *
 * Entry file for api routes versions
*/

import { Router } from 'express'
import v1WordsRoutes from './v1/words.route'
import v1RankRoutes from './v1/ranks.route'

// V1 routes configuration
export const v1Router = Router();

v1Router.use('/word', v1WordsRoutes)
v1Router.use('/rank', v1RankRoutes)

// FLU::Other routes configurations