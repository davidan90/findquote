import React from 'react'
import { object, arrayOf, instanceOf } from 'prop-types'
import { FQContainer, FQButton } from 'components'
import { FQQuote } from 'containers'
import { I18nSpan } from 'i18n'
import { Quote } from '../../../models'

const FQQuoteList = props => (
    <ul>
        {
            props.quotes.map((quote, index) => (
                <FQQuote
                    key={index}
                    quote={quote}
                    quoteAdded
                >
                    <FQButton>
                        <I18nSpan reference="fq-manager.fq-button.2" />
                    </FQButton>
                </FQQuote>
            ))
        }
    </ul>
)

FQQuoteList.propTypes = {
    quotes: arrayOf(instanceOf(Quote)).isRequired,
}

export default FQQuoteList
