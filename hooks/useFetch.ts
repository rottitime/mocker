import { useEffect, useState } from 'react'

const useFetch = (url: string) => {
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    if (!url) return

    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(`/api${url}`)
        const data = await res.json()
        setData(data)
      } catch (e) {
        setIsError(true)
      }
      setLoading(false)
    }

    fetchData()
  }, [url])

  return { data, loading, isError }
}

export default useFetch
