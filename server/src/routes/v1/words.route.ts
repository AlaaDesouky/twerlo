/* -- ranks.routes.ts --
 *
 * Getting words api endpoint
 * URL: ~/api/v1/word
*/

import { Router } from 'express';
const router = Router();
import { getWords } from '../../services/word.service'

router.route('/').post(getWords)

export default router;