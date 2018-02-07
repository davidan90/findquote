import React from 'react'
import { storiesOf } from '@storybook/react'
import { MainPage } from 'components'
import { I18nProvider } from 'i18n'

const lang = 'es'

storiesOf('MainPage', module)
  .add('default', () => (
    <I18nProvider lang={lang}>
      <MainPage />
    </I18nProvider>
  ))
