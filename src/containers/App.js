import React from 'react'
import { connect } from 'react-redux'
import { string, bool, object, func } from 'prop-types'
import App from 'components/App'

const languages = ['es', 'en']

class AppContainer extends React.Component {
  static propTypes = {
    lang: string.isRequired,
    theme: string,
  }

  static defaultProps = {
    lang: languages.find(lang => lang === navigator.language) || 'en',
  }

  componentWillMount() {}

  render() {
    const { lang, theme } = this.props
    return (
      <App
        {...{ lang, theme }}
      />
    )
  }
}

export default AppContainer
