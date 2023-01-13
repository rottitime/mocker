'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import MockRequirementsForm from '@/components/MockRequirementsForm/MockRequirementsForm'
import { decodeObject, encodeObject } from '@/lib'
import PreviewMock from '@/components/PreviewMock/PreviewMock'
import { Card, PreviewUrl } from '@/components'

const PreviewPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const fieldsParam = searchParams.get('fields')

  // const query = router?.query
  const fields = decodeObject(fieldsParam?.toString() || '[]')

  return (
    <div className="flex gap-10 [&>div]:w-1/2">
      <Card>
        {!!fields.length && (
          <MockRequirementsForm
            defaultValues={{ fields }}
            onFormSubmit={({ fields }) =>
              router.push(`/preview?fields=${encodeObject(fields)}`)
            }
          />
        )}
      </Card>
      <Card>
        <PreviewUrl fields={fields} />
        <PreviewMock data={fields} />
      </Card>
    </div>
  )
}

export default PreviewPage
