import React from 'react'
import { any } from 'prop-types'
import { Container, Message } from 'semantic-ui-react'
import { isDev } from 'config'
import { I18nSpan } from 'i18n'
import { FQErrorDetails } from 'components'

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
        <Container>
          <Message
            negative
            icon="x"
            header={<I18nSpan reference="global.error" />}
            content={<FQErrorDetails {...{ error, errorInfo }} />}
          />
        </Container>
      ) : null
    }
    return this.props.children
  }
}

export default FQErrorBoundary
