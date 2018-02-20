import React from 'react'
import { object } from 'prop-types'
import { FQContainer } from 'components'
import { FQQuoteList, FQQuote } from 'containers'
import { I18nSpan } from 'i18n'

const FQManager = (props) => (
    <FQContainer>
        <FQQuote
            quote={props.quoteLoaded}
            quoteAdded={false}
        />
        <FQQuoteList />
    </FQContainer>
)

FQManager.propTypes = {
    quoteLoaded: object,
}

export default FQManager
