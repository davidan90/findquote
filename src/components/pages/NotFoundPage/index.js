import React from 'react'
import { func } from 'prop-types'
import styled from 'styled-components'
import { I18nSpan } from 'i18n'

const StyleNotFoundPage = styled.div`
  margin-top: 10px;
`

const NotFoundPage = (props) => {
  const { handleGoBack } = props
  return (
    <StyleNotFoundPage>
        <I18nSpan reference="not-found-page.title" />
        <button onClick={handleGoBack}>
          <I18nSpan reference="not-found-page.go-home" />
        </button>
    </StyleNotFoundPage >
  )
}

NotFoundPage.propTypes = {
  handleGoBack: func,
}

export default NotFoundPage
