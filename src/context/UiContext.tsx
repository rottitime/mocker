'use client'

import { decodeObject } from '@/lib'
import { Fields } from '@/types'
import { useSearchParams } from 'next/navigation'
import { createContext, FC, ReactNode, useContext, useMemo, useState } from 'react'

type Props = {
  totalFields: number
  focusField?: number
  setTotalFields: (p: number) => void
  setFocusField: (p?: number) => void
  fields: Fields[] | null
}

const UIContext = createContext<Props>({} as Props)

export const UiProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [totalFields, setTotalFields] = useState(0)
  const [focusField, setFocusField] = useState<number>()
  const searchParams = useSearchParams()
  const fieldsParam = searchParams.get('fields')

  const fields = useMemo(() => {
    return fieldsParam ? decodeObject(fieldsParam?.toString() || '[]') : null
  }, [fieldsParam])

  const context: Props = {
    fields,
    totalFields,
    focusField,
    setTotalFields,
    setFocusField
  }

  return <UIContext.Provider value={context}>{children}</UIContext.Provider>
}

export const useUiContext = () => {
  const context = useContext(UIContext)
  return context
}
