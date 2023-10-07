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

const Share = dynamic(() => import('@/components/Share'), {
  ssr: false,
  loading: () => (
    <div className="text-center">
      <Loading />
    </div>
  )
})

const PreviewPage = () => (
  <div className="mb-2 flex gap-10 [&>div]:w-1/2 [&>div]:self-start">
    <Card>
      <h2 className="text-xl">Contragulations, API Created</h2>
      <p className="mb-4 text-sm">
        Your input will now automatically update as you type.
      </p>
      <MockRequirementsForm live />
    </Card>
    <Card>
      <h2>Your API </h2>

      <PreviewUrl />

      <section className="mt-3 text-right">
        <Share text={metadata.title} />
      </section>

      <hr className="mx-4 my-4" />

      <h2>Preview</h2>
      <PreviewMock />
    </Card>
  </div>
)

export const metadata = {
  title: 'Preview - API Mock'
}

export default PreviewPage
