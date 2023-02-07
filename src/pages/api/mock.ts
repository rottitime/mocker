import type { NextApiRequest, NextApiResponse } from 'next'
import { decodeObject, runMiddleware } from '@/lib'
import { Fields } from '@/types'
import Cors from 'cors'
import { fieldsToMockJson } from '@/lib/data'

const cors = Cors({
  methods: ['GET']
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { fields, rows } = req.query

  const rowsAsInt = parseInt(typeof rows === 'string' ? rows : '10')

  if (fields) {
    const data: Fields[] = decodeObject(fields.toString())
    await runMiddleware(req, res, cors)
    res.status(200).json(fieldsToMockJson(data, rowsAsInt))
  }
}
