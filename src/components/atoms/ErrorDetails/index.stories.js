import React from 'react'
import { storiesOf } from '@storybook/react'
import { ErrorDetails } from 'components'

const errorMock = {
  trace: 'Woooooops!',
  toString: function() { return this.trace },
}

const errorInfoMock = {
  componentStack: 'U_U',
}

storiesOf('ErrorDetails', module)
  .add('default', () => (
    <ErrorDetails error={errorMock} errorInfo={errorInfoMock} />
  ))
