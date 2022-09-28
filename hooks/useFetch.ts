import { useEffect, useState } from 'react'

const useFetch = (url: string) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    if (!url) return

    const fetchData = async () => {
      setLoading(true)
      const res = await fetch(`/api${url}`)
      const data = await res.json()
      setData(data)
      setLoading(false)
    }

    fetchData()
  }, [url])

  return { data, loading }
}

export default useFetch
