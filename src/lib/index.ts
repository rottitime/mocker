export * from './url-utils'

export const percentageRange = (
  percentage: number,
  rangeStart: number,
  rangeEnd: number
): number => {
  const range = (rangeEnd - rangeStart) / 100
  return percentage * range + rangeStart
}
