'use client'
import { BackgroundDots } from '@/components'
import MockRequirementsForm from '@/components/MockRequirementsForm/MockRequirementsForm'
import { encodeObject } from '@/lib'
import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter()
  return (
    <>
      <MockRequirementsForm
        onFormSubmit={({ fields }) => {
          router.push(`/preview?fields=${encodeObject(fields)}`)
        }}
      />
      <BackgroundDots />
    </>
  )
}

export default Home
