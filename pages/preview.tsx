import { useRouter } from 'next/router'
import useFetch from '@/hooks/useFetch'

const PreviewPage = () => {
  const router = useRouter()

  const query = router?.query || {}
  const url = query && `/mock?${new URLSearchParams(query as Record<string, string>)}`
  const { loading, data, isError } = useFetch(url)

  const fullUrl = data && `${window.location.origin}/api${url}`

  if (loading) return <p>Loading...</p>
  if (isError) return <p>OOps something went wrong, please try again later.</p>
  return (
    <>
      <h1>PreviewPage</h1>

      {fullUrl && (
        <>
          <p>
            <b>Mock url</b>:
            <br />
            <a href={fullUrl} target="_blank" rel="noreferrer">
              {fullUrl}
            </a>
          </p>
          <p>
            <b>Sample</b>:
            <br />
            <code>{JSON.stringify(data)}</code>
          </p>
        </>
      )}
    </>
  )
}

export default PreviewPage
