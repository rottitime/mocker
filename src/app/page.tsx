'use client'
import MockRequirementsForm from '@/components/MockRequirementsForm/MockRequirementsForm'
import { encodeObject } from '@/lib'
import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter()
  return (
    <>
      <MockRequirementsForm
        onSubmit={({ fields }) => {
          router.push(`/preview?fields=${encodeObject(fields)}`)
        }}
      />
    </>
  )
}

export default Home
