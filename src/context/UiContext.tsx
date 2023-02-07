'use client'

import { decodeObject } from '@/lib'
import { Fields } from '@/types'
import { useSearchParams } from 'next/navigation'
import { createContext, FC, ReactNode, useContext, useMemo, useState } from 'react'

type Props = {
  totalFields: number
  focusField?: number
  rows?: number
  setTotalFields: (p: number) => void
  setFocusField: (p?: number) => void
  fields: Fields[] | null
  params: string
}

const UIContext = createContext<Props>({} as Props)

export const UiProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [totalFields, setTotalFields] = useState(0)
  const [focusField, setFocusField] = useState<number>()
  const searchParams = useSearchParams()
  const fieldsParam = searchParams.get('fields')
  const rowsParam = searchParams.get('rows')

  const rows = rowsParam ? parseInt(rowsParam) : undefined

  const fields = useMemo(() => {
    return fieldsParam ? decodeObject(fieldsParam?.toString() || '[]') : null
  }, [fieldsParam])

  const params = new URLSearchParams({
    fields: JSON.stringify(fields),
    rows: rows?.toString() || ''
  }).toString()

  const context: Props = {
    rows,
    fields,
    totalFields,
    focusField,
    setTotalFields,
    setFocusField,
    params
  }

  return <UIContext.Provider value={context}>{children}</UIContext.Provider>
}

export const useUiContext = () => {
  const context = useContext(UIContext)
  return context
}
