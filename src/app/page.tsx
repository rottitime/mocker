'use client'
import { BackgroundDots, BackgroundImage } from '@/components'
import MockRequirementsForm from '@/components/MockRequirementsForm/MockRequirementsForm'
import { UiProvider } from '@/context/UiContext'
import { encodeObject } from '@/lib'
import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter()
  return (
    <UiProvider>
      <MockRequirementsForm
        className="relative z-30"
        onFormSubmit={({ fields }) => {
          router.push(`/preview?fields=${encodeObject(fields)}`)
        }}
      />
      {/* <BackgroundDots /> */}
      <BackgroundImage />
    </UiProvider>
  )
}

export default Home
