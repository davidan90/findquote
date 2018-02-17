import React from 'react'
import { object } from 'prop-types'
import { FQContainer, FQQuote } from 'components'
import { FQQuoteList } from 'containers'
import { I18nSpan } from 'i18n'

const FQManager = (props) => (
    <FQContainer>
        <FQQuote
            quote={props.quoteLoaded}
        />
        <FQQuoteList />
    </FQContainer>
)

FQManager.propTypes = {
    quoteLoaded: object,
}

export default FQManager
