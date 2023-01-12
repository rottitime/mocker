'use client'
import { createContext, FC, ReactNode, useContext, useState } from 'react'

type Props = {
  totalFields: number
  focusField?: number | undefined
  setTotalFields: (p: number) => void
  setFocusField: (p?: number) => void
}

const UIContext = createContext<Props>({} as Props)

export const UiProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [totalFields, setTotalFields] = useState(0)
  const [focusField, setFocusField] = useState<number>()

  const context: Props = {
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
