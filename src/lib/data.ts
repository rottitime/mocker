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
    case 'boolean':
      return Boolean(Math.random() < 0.5).toString()
    case 'email':
      return faker.internet.email()
    case 'first_name':
      return faker.person.firstName()
    case 'id':
      return faker.string.uuid()
    case 'sentence':
      return faker.lorem.sentence()
    case 'date':
      return faker.date.anytime().toString()
    case 'image':
      return faker.image.url()
    default:
      return ''
  }
}
