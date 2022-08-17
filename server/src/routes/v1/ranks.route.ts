/* -- ranks.routes.ts --
 *
 * Getting ranks api endpoint
 * URL: ~/api/v1/rank
*/

import { Router } from 'express';
import { getRank } from '../../services/rank.service';
const router = Router();

// Incase of async api calls, each service should be wrapped with asyncHandler
//
// import * as asyncHandler from 'express-async-handler'
// router.route('${URL}').post(asyncHandler(getRank))
router.route('/').post(getRank)


export default router;