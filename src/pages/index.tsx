import { MockRequirementsForm } from '@/components'
import Layout from '@/components/Layout/Layout'
import { encodeObject } from '@/lib'
import Router from 'next/router'
import { ReactElement } from 'react'

const Home = () => {
  return (
    <>
      <h1>Mocker v1</h1>

      <div style={{ display: 'flex', gap: 30 }}>
        <div>
          <h2>Form</h2>
          <MockRequirementsForm
            onSubmit={({ fields }) => {
              Router.push({
                pathname: '/preview',
                query: { fields: encodeObject(fields) }
              })
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Home

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>
