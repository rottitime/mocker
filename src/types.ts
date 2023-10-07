export type FieldType =
  | 'email'
  | 'first_name'
  | 'id'
  | 'boolean'
  | 'sentence'
  | 'date'
  | 'image'

export type Fields = {
  field_name: string
  field_type?: FieldType
}
export type DataParams = {
  fields: string
  rows: string
}
