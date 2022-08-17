import { calculateRank } from '../utils';
import { scoresList } from '../datastore/TestData.json'
import { ExpressHandler } from '../types';
import { RankRequest, RankResponse } from './rank.service.type';
import { StatusCodes } from 'http-status-codes';

export const getRank: ExpressHandler<RankRequest, RankResponse> = (req, res) => {
  const { score } = req.body;
  const rank = calculateRank(scoresList, score)
  return res.status(StatusCodes.OK).json({ success: true, data: rank })
}