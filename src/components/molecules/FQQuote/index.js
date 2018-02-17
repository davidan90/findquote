import React from 'react'
import { object } from 'prop-types'
import { FQContainer, FQParagraph } from 'components'
import { Quote } from '../../../models'

const FQQuote = (props) => {
    const {
        quote
    } = props
    const q = quote ? new Quote(quote._quote, quote._author, quote._category) : null
    
    return q ? (
        <FQContainer
            width={'47%'}
            inline
        >
            <FQParagraph>
                {q.quote}
            </FQParagraph>
            <FQParagraph>
                {q.author}
            </FQParagraph>
        </FQContainer>
    ) : null
}

FQQuote.propTypes = {
    quote: object,
}

export default FQQuote
