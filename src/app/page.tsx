'use client'
import MockRequirementsForm from '@/components/MockRequirementsForm/MockRequirementsForm'
import { encodeObject } from '@/lib'
import Router from 'next/router'

const Home = () => {
  return (
    <>
      <MockRequirementsForm
        onSubmit={({ fields }) => {
          Router.push({
            pathname: '/preview',
            query: { fields: encodeObject(fields) }
          })
        }}
      />
    </>
  )
}

export default Home
