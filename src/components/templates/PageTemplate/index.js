import React from 'react'
import { any } from 'prop-types'
import { FQContainer } from 'components'

const PageTemplate = props => (
  <FQContainer>
    {/* TODO */}
    {props.children}
  </FQContainer>
)

PageTemplate.propTypes = {
  children: any,
}

PageTemplate.defaultProps = {
  children: <div></div>,
}

export default PageTemplate
