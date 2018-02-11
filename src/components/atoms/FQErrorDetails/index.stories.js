import React from 'react'
import { storiesOf } from '@storybook/react'
import { FQErrorDetails } from 'components'

const errorMock = {
  trace: 'Woooooops!',
  toString: function() { return this.trace },
}

const errorInfoMock = {
  componentStack: 'U_U',
}

storiesOf('FQErrorDetails', module)
  .add('default', () => (
    <FQErrorDetails error={errorMock} errorInfo={errorInfoMock} />
  ))
