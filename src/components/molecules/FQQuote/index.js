import React from 'react'
import { bool, instanceOf } from 'prop-types'
import { FQContainer, FQParagraph } from 'components'
import { Quote } from '../../../models'
import { I18nSpan } from 'i18n'

const FQQuote = (props) => {
    const {
        quote
    } = props
    // const q = quote ? new Quote(quote._quote, quote._author, quote._category) : null
    
    return quote ? (
        <div>
            <FQParagraph>
                {quote.quote}
            </FQParagraph>
            <FQParagraph>
                {quote.author}
            </FQParagraph>
            { props.children }
        </div>
    ) : null
}

FQQuote.propTypes = {
    quote: instanceOf(Quote).isRequired,
}

export default FQQuote
