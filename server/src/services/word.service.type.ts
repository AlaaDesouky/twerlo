export type WordRequest = { wordsCount: number, uniqueKey: string }
export type WordResponse = { success: boolean, count: number, labelList: string[], data: object[] }