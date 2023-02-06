import { fieldsToMockJson } from './data'

describe('fieldsToMockJson()', () => {
  it('Return types', () => {
    expect(
      fieldsToMockJson([{ field_name: 'test1', field_type: 'email' }], 0)
    ).toBeInstanceOf(Object)

    expect(
      fieldsToMockJson([{ field_name: 'test1', field_type: 'email' }], 1)
    ).toHaveLength(1)

    expect(
      fieldsToMockJson([{ field_name: 'test1', field_type: 'email' }], 2)
    ).toHaveLength(2)
  })
})
