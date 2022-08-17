import { ExpressHandler } from 'src/types';
import { WordRequest, WordResponse } from './word.service.type';
import { wordList } from '../datastore/TestData.json'
import { generateRandomData } from '../utils'
import { StatusCodes } from 'http-status-codes';



export const getWords: ExpressHandler<WordRequest, WordResponse> = (req, res) => {
  let { wordsCount, uniqueKey = 'pos' } = req.body;
  // Check if the requested number of words doesn't exceed the total number of words
  wordsCount = wordsCount > wordList.length ? wordList.length / 2 : wordsCount

  const result = generateRandomData(wordList, uniqueKey, wordsCount)
  const labelList = [...new Set(wordList.map(item => item[uniqueKey]))]

  return res.status(StatusCodes.OK).json({ success: true, count: result.length, labelList, data: result })
}