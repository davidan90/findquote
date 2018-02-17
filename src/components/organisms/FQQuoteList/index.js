import React from 'react'
import { object, arrayOf } from 'prop-types'
import { FQContainer, FQQuote } from 'components'

const FQQuoteList = props => (
    <FQContainer
        width={'47%'}
        inline
    >
        <ul>
            {
                props.quotes.map(quote => (
                    <FQQuote
                        quote={quote}
                    />
                ))
            }
        </ul>
    </FQContainer>
)

FQQuoteList.propTypes = {
    quotes: arrayOf(object).isRequired,
}

export default FQQuoteList
