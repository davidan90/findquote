import React from 'react'
import { object } from 'prop-types'
import { FQParagraph } from 'components'
import { Quote } from '../../../models'

const FQQuote = (props) => {
    const {
        lastQuote
    } = props
    const quote = lastQuote ? new Quote(lastQuote._quote, lastQuote._author, lastQuote._category) : null
    
    return quote ? (
        <div>
            <FQParagraph>
                {quote.quote}
            </FQParagraph>
            <FQParagraph>
                {quote.author}
            </FQParagraph>
        </div>
    ) : null
}

FQQuote.propTypes = {
    lastQuote: object,
}

export default FQQuote
