import React from 'react'
import { func, oneOf } from 'prop-types'
import { Button, Icon } from 'semantic-ui-react'
import { I18nSpan } from 'i18n'

const [darkTheme, lightTheme] = ['dark', 'light']

class ThemeButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: props.theme || lightTheme,
    }
  }

  handleChangeTheme() {
    const { theme } = this.props
    const { onChangeTheme } = this.props
    if (theme === lightTheme) {
      onChangeTheme(darkTheme)
      this.setState({ theme: darkTheme })
    } else {
      onChangeTheme(lightTheme)
      this.setState({ theme: lightTheme })
    }
  }

  render() {
    const { theme } = this.state
    return (
      <Button onClick={this.handleChangeTheme.bind(this)}>
        <Icon name={theme === 'light' ? 'moon' : 'sun'} size="large" />
        <I18nSpan reference={theme === 'light' ? 'theme.night' : 'theme.day'} />
      </Button>
    )
  }
}

ThemeButton.propTypes = {
  theme: oneOf([darkTheme, lightTheme]).isRequired,
  onChangeTheme: func,
}

export default ThemeButton
