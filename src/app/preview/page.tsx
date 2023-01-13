import { MockRequirementsForm, Card } from '@/components'
import dynamic from 'next/dynamic'

const PreviewUrl = dynamic(() => import('@/components/PreviewUrl'), { ssr: false })
const PreviewMock = dynamic(() => import('@/components/PreviewMock'), { ssr: false })

const PreviewPage = () => (
  <div className="flex gap-10 [&>div]:w-1/2 [&>div]:grow">
    <Card>
      <MockRequirementsForm />
    </Card>
    <Card>
      <PreviewUrl />
      <PreviewMock />
    </Card>
  </div>
)

export default PreviewPage
