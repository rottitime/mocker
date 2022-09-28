import type { NextApiRequest, NextApiResponse } from 'next'
import { decodeObject } from '@/lib'
import { Fields } from '@/components/MockRequirementsForm/types'
import { faker } from '@faker-js/faker'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { fields } = req.query

  if (fields) {
    const data: Fields[] = decodeObject(fields.toString())
    const jsonData = data.reduce(
      (a, { field_name, field_type }) => ({
        ...a,
        [field_name]: renderField(field_type)
      }),
      {}
    )
    res.status(200).json(jsonData)
  }
}

const renderField = (type: string): string => {
  switch (type) {
    case 'email':
      return faker.internet.email()
    case 'first name':
      return faker.name.firstName()
    case 'id':
      return faker.datatype.uuid()
    default:
      return ''
  }
}
