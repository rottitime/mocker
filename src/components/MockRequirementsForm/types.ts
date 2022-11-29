import { Fields } from '@/types'
import { FormHTMLAttributes } from 'react'

export type FormValues = {
  fields: Fields[]
}

export type Props = {
  defaultValues?: FormValues
  onFormSubmit: (data: FormValues) => void
} & FormHTMLAttributes<HTMLFormElement>
