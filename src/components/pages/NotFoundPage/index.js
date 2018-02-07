import React from 'react'
import { func } from 'prop-types'
import styled from 'styled-components'
import { Container, Message, Button } from 'semantic-ui-react'

import { I18nSpan } from 'i18n'

const StyleNotFoundPage = styled.div`
  margin-top: 10px;
`

const NotFoundPage = (props) => {
  const { handleGoBack } = props
  return (
    <StyleNotFoundPage>
      <Container>
        <Message
          negative
          icon="blind"
          header="404"
          content={<I18nSpan reference="not-found-page.title" />}
        />
        <Button onClick={handleGoBack}>
          <I18nSpan reference="not-found-page.go-home" />
        </Button>
      </Container>
    </StyleNotFoundPage >
  )
}

NotFoundPage.propTypes = {
  handleGoBack: func,
}

export default NotFoundPage
