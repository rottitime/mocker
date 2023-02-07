import { MockRequirementsForm, Card, Loading } from '@/components'
import dynamic from 'next/dynamic'

const PreviewUrl = dynamic(() => import('@/components/PreviewUrl'), {
  ssr: false,
  loading: () => (
    <div className="text-center">
      <Loading />
    </div>
  )
})
const PreviewMock = dynamic(() => import('@/components/PreviewMock'), {
  ssr: false,
  loading: () => (
    <div className="text-center">
      <Loading />
    </div>
  )
})

const PreviewPage = () => (
  <div className="flex gap-10 [&>div]:w-1/2 [&>div]:self-start">
    <Card>
      <MockRequirementsForm />
    </Card>
    <Card>
      <h2>Your API </h2>
      <PreviewUrl />

      <hr className="mx-4 my-4" />

      <h2>Sample data</h2>
      <PreviewMock />
    </Card>
  </div>
)

export default PreviewPage
