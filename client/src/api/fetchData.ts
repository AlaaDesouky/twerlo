/**
 * Custom fetch method for API calls
 */

const metadata = {
  HOST: process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://twerlo.xyz',
  ENTRY_POINT: 'api/v1',
  REQUEST_OPTIONS: {
    method: 'POST',
    headers: [['Content-Type', 'application/json']]
  }
}

export const fetchData = async (endPoint: string, bodyData: any) => {
  const url = `${metadata.HOST}/${metadata.ENTRY_POINT}/${endPoint}`
  const response = await fetch(url, {
    ...metadata.REQUEST_OPTIONS,
    body: JSON.stringify({ ...bodyData })
  });
  if (!response.ok) {
    const { error } = await response.json()
    throw error
  }
  return response.json()
}