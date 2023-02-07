import { Fields, FieldType } from '@/types'
import { faker } from '@faker-js/faker'

export const fieldsToMockJson = (data: Fields[], rows = 0) => {
  const getData = () =>
    data.reduce(
      (a, { field_name, field_type }) => ({
        ...a,
        [field_name]: renderField(field_type)
      }),
      {}
    )

  return !!rows ? [...Array(rows).keys()].map(() => getData()) : getData()
}

const renderField = (type?: FieldType): string => {
  switch (type) {
    case 'email':
      return faker.internet.email()
    case 'first_name':
      return faker.name.firstName()
    case 'id':
      return faker.datatype.uuid()
    default:
      return ''
  }
}
