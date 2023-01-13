import { useRouter, useSearchParams } from 'next/navigation'
import MockRequirementsForm from '@/components/MockRequirementsForm'
import { decodeObject, encodeObject } from '@/lib'
// import PreviewMock from '@/components/PreviewMock/PreviewMock'
import { Card } from '@/components'
import PreviewUrl from '@/components/PreviewUrl'

const PreviewPage = () => {
  // const router = useRouter()
  // const searchParams = useSearchParams()
  // const fieldsParam = searchParams.get('fields')
  // const fields = decodeObject(fieldsParam?.toString() || '[]')

  return (
    <div className="flex gap-10 [&>div]:w-1/2">
      <Card>
        <MockRequirementsForm
        // defaultValues={{ fields }}
        // onFormSubmit={
        //   ({ fields }) => console.log({ fields })
        //   // router.push(`/preview?fields=${encodeObject(fields)}`)
        // }
        />
      </Card>
      <Card>
        {/* {origin && url} */}
        {/* <PreviewUrl fields={fields} /> */}
        {/* <PreviewMock data={fields} /> */}
      </Card>
    </div>
  )
}

export default PreviewPage
