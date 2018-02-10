
import React from 'react'
import { PageTemplate, ErrorBoundary, FQInput, FQButton, FQContainer } from 'components'

const MainPage = () => (
  <PageTemplate>
      {/* TODO */}
      <FQContainer>
        <FQInput
          type={'text'}
          placeholder={'Example'}
          width={'100%'}
        />
        <FQButton/>
      </FQContainer>
  </PageTemplate>
)

export default MainPage
