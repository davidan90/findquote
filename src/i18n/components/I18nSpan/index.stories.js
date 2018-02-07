import React from 'react'
import { storiesOf } from '@storybook/react'
import { I18nProvider, I18nSpan } from 'i18n'

storiesOf('I18nSpan', module)
  .add('valid reference', () => (
    <I18nProvider lang="es">
      <I18nSpan reference="login.btn-text" />
    </I18nProvider>
  ))
  .add('invalid reference', () => (
    <I18nProvider lang="es">
      <I18nSpan reference="login.text" />
    </I18nProvider>
  ))
