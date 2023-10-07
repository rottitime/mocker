import { DataParams, Fields } from '@/types'
import { NextApiRequest, NextApiResponse } from 'next'

export const encodeObject = (data: object): string =>
  encodeURIComponent(JSON.stringify(data))

export const decodeObject = (data: string) => JSON.parse(decodeURIComponent(data))

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
export const runMiddleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  // eslint-disable-next-line @typescript-eslint/ban-types
  fn: Function
) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: unknown) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export const getParams = (fields: Fields[], rows: number): string =>
  new URLSearchParams({
    fields: JSON.stringify(fields),
    rows: rows.toString()
  } as DataParams).toString()
