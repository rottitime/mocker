import { percentageRange } from './index'

describe('percentageRange()', () => {
  it('calculates', () => {
    expect(percentageRange(0, 40, 60)).toEqual(40)
    expect(percentageRange(50, 40, 60)).toEqual(50)
    expect(percentageRange(100, 40, 60)).toEqual(60)

    expect(percentageRange(0, 45, 60)).toEqual(45)
    expect(percentageRange(50, 45, 60)).toEqual(52.5)
    expect(percentageRange(100, 45, 60)).toEqual(60)
  })
})
