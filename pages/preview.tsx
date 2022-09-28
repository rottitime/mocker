import MockData from '@/components/MockData/MockData'
import { decodeObject } from '@/lib'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

const PreviewPage = () => {
  const router = useRouter()

  const data = useMemo(() => {
    const { fields } = router?.query
    if (fields) return decodeObject(fields.toString())
    return []
  }, [router?.query])

  return (
    <div>
      PreviewPage
      <MockData data={data} />
    </div>
  )
}

export default PreviewPage
