import { useRouter } from 'next/router'
import useFetch from '@/hooks/useFetch'
import MockRequirementsForm from '@/components/MockRequirementsForm/MockRequirementsForm'
import { decodeObject, encodeObject } from '@/lib'
import PreviewUrl from '@/components/PreviewUrl/PreviewUrl'

const PreviewPage = () => {
  const router = useRouter()
  const query = router?.query
  const url = !!Object.keys(query).length
    ? `/mock?${new URLSearchParams(query as Record<string, string>)}`
    : ''
  const { loading, data, isError } = useFetch(url)

  const fields = decodeObject(query?.fields?.toString() || '[]')

  if (loading) return <p>Loading...</p>
  if (isError) return <p>OOps something went wrong, please try again later.</p>

  return (
    <>
      <h1>PreviewPage</h1>

      <div style={{ display: 'flex', gap: 30 }}>
        <div>
          <MockRequirementsForm
            defaultValues={{ fields }}
            onSubmit={({ fields }) =>
              router.replace({
                pathname: '/preview',
                query: { fields: encodeObject(fields) }
              })
            }
          />
        </div>
        <div>
          <h2>Preview</h2>
          {data && <PreviewUrl fields={fields} />}
          <hr />
          <code>{JSON.stringify(data)}</code>
        </div>
      </div>

      <hr />
    </>
  )
}

export default PreviewPage
