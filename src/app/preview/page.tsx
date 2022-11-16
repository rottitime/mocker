'use client'

import { useRouter } from 'next/router'
import MockRequirementsForm from '@/components/MockRequirementsForm/MockRequirementsForm'
import { decodeObject, encodeObject } from '@/lib'
import PreviewMock from '@/components/PreviewMock/PreviewMock'
import dynamic from 'next/dynamic'

const DynamicPreviewUrl = dynamic(() => import('@/components/PreviewUrl/PreviewUrl'), {
  ssr: false
})

const PreviewPage = () => {
  const router = useRouter()
  const query = router?.query
  const fields = decodeObject(query?.fields?.toString() || '[]')

  return (
    <>
      <h1>PreviewPage</h1>

      <div style={{ display: 'flex', gap: 30 }}>
        <div>
          {!!fields.length && (
            <MockRequirementsForm
              defaultValues={{ fields }}
              onSubmit={({ fields }) =>
                router.replace({
                  pathname: '/preview',
                  query: { fields: encodeObject(fields) }
                })
              }
            />
          )}
        </div>
        <div>
          <h2>Preview</h2>
          {<DynamicPreviewUrl fields={fields} />}
          <hr />

          {<PreviewMock data={fields} />}
        </div>
      </div>

      <hr />
    </>
  )
}

export default PreviewPage
