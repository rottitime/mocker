import { MockRequirementsForm } from '@/components'
import { encodeObject } from '@/lib'
// import styled from '@emotion/styled'
import Router from 'next/router'
import tw, { styled, css } from 'twin.macro'
// import { css } from '@emotion/core'

const TwinBlock = styled.div`
  border: 10px solid green;
  ${tw`border border-b-cyan-900 rounded`}
`

const StyledBlock = styled.div`
  border: 3px solid red;
`

const Home = () => {
  return (
    <>
      <h1>Mocker v1</h1>

      <div style={{ display: 'flex', gap: 30 }}>
        <div>
          <h2>Form</h2>
          <TwinBlock>Twin</TwinBlock>
          <StyledBlock>Loerem</StyledBlock>
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
