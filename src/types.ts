export type FieldType = 'email' | 'first_name' | 'id' | 'boolean'

export type Fields = {
  field_name: string
  field_type?: FieldType
}
