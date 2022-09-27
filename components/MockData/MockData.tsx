import { faker } from '@faker-js/faker'
import { FC } from 'react'
import { Props } from './types'

const MockData: FC<Props> = ({ data }) => {
  console.log({ data })

  //   const jsonData = Object.assign(
  //     {},
  //     data.map(({ field_name, field_type }) => ({
  //       field_name: renderField(field_type)
  //     }))
  //   )

  const jsonData = data.reduce(
    (a, { field_name, field_type }) => ({ ...a, [field_name]: field_type }),
    {}
  )

  return (
    <div>
      <h1>Mock Data</h1>

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
    default:
      return ''
  }
}
