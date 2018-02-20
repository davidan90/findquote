import React from 'react'
import { object, arrayOf } from 'prop-types'
import { FQContainer, FQButton } from 'components'
import { FQQuote } from 'containers'
import { I18nSpan } from 'i18n'

const FQQuoteList = props => (
    <FQContainer
        width={'47%'}
        inline
    >
        <ul>
            {
                props.quotes.map((quote, index) => (
                    <FQQuote 
                        key={index}
                        quote={quote}
                        quoteAdded
                    >
                        <FQButton>
                            <I18nSpan reference="fq-manager.fq-button.2"/>
                        </FQButton>
                    </FQQuote>
                ))
            }
        </ul>
    </FQContainer>
)

FQQuoteList.propTypes = {
    quotes: arrayOf(object).isRequired,
}

export default FQQuoteList
