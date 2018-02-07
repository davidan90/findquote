import React from 'react'
import { storiesOf } from '@storybook/react'
import { NotFoundPage } from 'components'
import { I18nProvider } from 'i18n'

const lang = 'es'

storiesOf('NotFoundPage', module)
  .add('default', () => (
    <I18nProvider lang={lang}>
      <NotFoundPage />
    </I18nProvider>
  ))
