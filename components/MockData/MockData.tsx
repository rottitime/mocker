import { faker } from '@faker-js/faker'
import { FC } from 'react'
import { Props } from './types'

const MockData: FC<Props> = ({ data }) => {
  const jsonData = data.reduce(
    (a, { field_name, field_type }) => ({ ...a, [field_name]: renderField(field_type) }),
    {}
  )

  return (
    <div>
      <h1>Mock Data </h1>
      <code>{JSON.stringify(jsonData)}</code>
    </div>
  )
}

export default MockData

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
