'use client'
import Card from '@/components/Card'
// import { BackgroundDots, BackgroundImage } from '@/components'
import MockRequirementsForm from '@/components/MockRequirementsForm/MockRequirementsForm'
import { encodeObject } from '@/lib'
import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter()
  return (
    <>
      <Card>
        <MockRequirementsForm
          className="relative z-30"
          onFormSubmit={({ fields }) => {
            router.push(`/preview?fields=${encodeObject(fields)}`)
          }}
        />
      </Card>
      {/* <BackgroundDots /> */}
      {/* <BackgroundImage /> */}
    </>
  )
}

export default Home
