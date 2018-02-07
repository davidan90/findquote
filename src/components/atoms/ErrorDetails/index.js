import React from 'react'
import { object } from 'prop-types'

const ErrorDetails = props => (
  <details style={{ whiteSpace: 'pre-wrap' }}>
    {props.error && props.error.toString()}
    <br />
    {props.errorInfo.componentStack}
  </details>
)

ErrorDetails.propTypes = {
  error: object.isRequired,
  errorInfo: object.isRequired,
}

export default ErrorDetails
