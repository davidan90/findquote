import React from 'react'
import { string, bool } from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { basename } from 'config'

import { ApiProvider, apiService } from 'services/api'
import { I18nProvider } from 'i18n'
import { MainApp } from 'components'

import lightTheme from './themes/light'
import darkTheme from './themes/dark'

const App = (props) => {
  const { lang, theme } = props
  return (
    <ApiProvider api={apiService.getInstance()}>
      <I18nProvider lang={lang}>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <Router basename={basename}>
            <MainApp />
          </Router>
        </ThemeProvider>
      </I18nProvider>
    </ApiProvider>
  )
}

App.propTypes = {
  lang: string.isRequired,
  theme: string,
}

export default App
