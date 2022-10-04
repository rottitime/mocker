import { Fields } from '@/types'
import { faker } from '@faker-js/faker'

export const fieldsToMockJson = (data: Fields[]) =>
  data.reduce(
    (a, { field_name, field_type }) => ({
      ...a,
      [field_name]: renderField(field_type)
    }),
    {}
  )

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
