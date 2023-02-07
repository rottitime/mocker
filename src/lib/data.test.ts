import { fieldsToMockJson } from './data'

describe('fieldsToMockJson()', () => {
  it('As object', () => {
    const data = fieldsToMockJson([{ field_name: 'test1', field_type: 'email' }], 0)
    expect(data).toBeInstanceOf(Object)
    expect(data).toHaveProperty('test1')
  })
  it('As Array', () => {
    expect(
      fieldsToMockJson([{ field_name: 'test1', field_type: 'email' }], 1)
    ).toHaveLength(1)

    expect(
      fieldsToMockJson([{ field_name: 'test1', field_type: 'email' }], 2)
    ).toHaveLength(2)
  })
})
