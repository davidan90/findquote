import React from 'react'
import { any } from 'prop-types'
import { isDev } from 'config'
import { I18nSpan } from 'i18n'
import { FQErrorDetails, FQContainer } from 'components'

class FQErrorBoundary extends React.Component {
  static propTypes = {
    children: any,
  }

  constructor(props) {
    super(props)
    this.state = {
      error: null,
      errorInfo: null,
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    })
  }

  render() {
    const { errorInfo, error } = this.state
    if (errorInfo) {
      return isDev ? (
        <FQContainer>
          <I18nSpan reference="global.error" />
          <FQErrorDetails {...{ error, errorInfo }} />
        </FQContainer>
      ) : null
    }
    return this.props.children
  }
}

export default FQErrorBoundary
