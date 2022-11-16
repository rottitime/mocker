import { decodeObject, encodeObject } from './url-utils'

describe('encodeObject()', () => {
  it('encodes', () => {
    expect(encodeObject({ a: 1 })).toEqual('%7B%22a%22%3A1%7D')
  })
})

describe('decodeObject()', () => {
  it('decodes', () => {
    expect(decodeObject('%7B%22a%22%3A1%7D')).toEqual({ a: 1 })
  })
})
