// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from 'next'
import { NextRequest } from 'next/server'

type Data = {
  name: string
}

export default function handler(_req: NextRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'John Doe' })
}
