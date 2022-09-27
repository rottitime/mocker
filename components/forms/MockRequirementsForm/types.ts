type Fields = {
  field_name: string
  field_type: string
}

export type FormValues = {
  fields: Fields[]
}

export type Props = {
  onSubmit: (data: FormValues) => void
}
