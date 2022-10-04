import { Fields } from '@/types'

export type FormValues = {
  fields: Fields[]
}

export type Props = {
  defaultValues?: FormValues
  onSubmit: (data: FormValues) => void
}
