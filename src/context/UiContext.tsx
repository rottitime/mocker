'use client'

import { decodeObject, getParams } from '@/lib'
import { Fields } from '@/types'
import { useSearchParams } from 'next/navigation'
import { createContext, FC, ReactNode, useContext, useMemo, useState } from 'react'

type Props = {
  totalFields: number
  focusField?: number
  rows: number
  setTotalFields: (p: number) => void
  setFocusField: (p?: number) => void
  fields: Fields[] | null
  params: string
  url: string
}

const UIContext = createContext<Props>({} as Props)

export const UiProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [totalFields, setTotalFields] = useState(0)
  const [focusField, setFocusField] = useState<number>()
  const searchParams = useSearchParams()
  const fieldsParam = searchParams?.get('fields')
  const rowsParam = searchParams?.get('rows') || '10'

  const rows = parseInt(rowsParam)

  const fields = useMemo(() => {
    return fieldsParam ? decodeObject(fieldsParam?.toString() || '[]') : null
  }, [fieldsParam])

  const params = getParams(fields, rows)
  const origin =
    typeof window !== 'undefined' && window.location.origin ? window.location.origin : ''
  const url = origin && params && `${origin}/api/mock?${params}`

  const context: Props = {
    rows,
    fields,
    totalFields,
    focusField,
    setTotalFields,
    setFocusField,
    params,
    url
  }

  return <UIContext.Provider value={context}>{children}</UIContext.Provider>
}

export const useUiContext = () => {
  const context = useContext(UIContext)
  return context
}
