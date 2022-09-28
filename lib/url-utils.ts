export const encodeObject = (data: object): string =>
  encodeURIComponent(JSON.stringify(data))

export const decodeObject = (data: string) => JSON.parse(decodeURIComponent(data))
