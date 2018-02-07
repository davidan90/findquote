import React from 'react'

import { NotFoundPage } from 'components'

class NotFoundPageContainer extends React.Component {
  static propTypes = {}

  componentWillMount() {}

  handleGoBack = () => {
    document.location.href = '/'
  }

  render() {
    return <NotFoundPage handleGoBack={this.handleGoBack} />
  }
}

export default NotFoundPageContainer
