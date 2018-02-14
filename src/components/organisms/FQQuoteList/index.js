import React from 'react'
import { object, arrayOf } from 'prop-types'
import { FQQuote } from 'components'

const FQQuoteList = props => (
    <ul>
        {
            props.quotes.map(quote => (
                <FQQuote
                    quote={quote}
                />
            ))
        }
    </ul>
)

FQQuoteList.propTypes = {
    quotes: arrayOf(object).isRequired,
}

export default FQQuoteList
