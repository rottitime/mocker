'use client'
import './global.css'
import MockRequirementsForm from '@/components/MockRequirementsForm/MockRequirementsForm'
import { encodeObject } from '@/lib'
import Router from 'next/router'

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
