'use client'
import Card from '@/components/Card'
// import { BackgroundDots, BackgroundImage } from '@/components'
import MockRequirementsForm from '@/components/MockRequirementsForm'
import { encodeObject } from '@/lib'
import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter()
  return (
    <>
      <Card>
        <MockRequirementsForm />
      </Card>
      {/* <BackgroundDots /> */}
      {/* <BackgroundImage /> */}
    </>
  )
}

export default Home
