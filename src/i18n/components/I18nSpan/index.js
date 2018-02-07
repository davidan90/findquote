import React from 'react'
import { func, string } from 'prop-types'

export const I18nSpan = (props, context) => {
  const { translate } = context
  return (
    <span>
      {translate(props.reference)}
    </span>
  )
}

I18nSpan.propTypes = {
  reference: string.isRequired,
}

I18nSpan.contextTypes = {
  translate: func,
}
