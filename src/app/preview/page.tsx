import { MockRequirementsForm, Card, PreviewUrl, PreviewMock } from '@/components'

const PreviewPage = () => {
  // const router = useRouter()
  // const searchParams = useSearchParams()
  // const fieldsParam = searchParams.get('fields')
  // const fields = decodeObject(fieldsParam?.toString() || '[]')

  return (
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
}

export default PreviewPage
