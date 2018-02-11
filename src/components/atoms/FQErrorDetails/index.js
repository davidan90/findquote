import React from 'react'
import { object } from 'prop-types'

const FQErrorDetails = props => (
  <details style={{ whiteSpace: 'pre-wrap' }}>
    {props.error && props.error.toString()}
    <br />
    {props.errorInfo.componentStack}
  </details>
)

FQErrorDetails.propTypes = {
  error: object.isRequired,
  errorInfo: object.isRequired,
}

export default FQErrorDetails
