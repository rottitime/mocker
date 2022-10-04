import { Fields } from '@/types'

export type FormValues = {
  fields: Fields[]
}

export type Props = {
  onSubmit: (data: FormValues) => void
}
