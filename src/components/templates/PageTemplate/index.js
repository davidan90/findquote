import React from 'react'
import { any } from 'prop-types'
import { ErrorBoundary, FQContainer, FQFooter } from 'components'

const PageTemplate = props => (
  <FQContainer>
    <ErrorBoundary>
    {/* TODO */}
    {props.children}
    <FQFooter
      bkColor={'blue'}
      height={'20%'}
    />
    </ErrorBoundary>
  </FQContainer>
)

PageTemplate.propTypes = {
  children: any,
}

PageTemplate.defaultProps = {
  children: <div></div>,
}

export default PageTemplate
