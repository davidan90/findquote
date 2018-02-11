import React from 'react'
import { any } from 'prop-types'
import { FQErrorBoundary, FQContainer, FQFooter } from 'components'

const PageTemplate = props => (
  <FQContainer>
    <FQErrorBoundary>
    {props.children}
    <FQFooter
      bkColor={'blue'}
      height={'20%'}
    />
    </FQErrorBoundary>
  </FQContainer>
)

PageTemplate.propTypes = {
  children: any,
}

PageTemplate.defaultProps = {
  children: <div></div>,
}

export default PageTemplate
