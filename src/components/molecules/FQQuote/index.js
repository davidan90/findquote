import React from 'react'
import { object } from 'prop-types'
import { FQContainer, FQParagraph } from 'components'
import { FQButton } from 'containers'
import { Quote } from '../../../models'
import { I18nSpan } from 'i18n'

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
            <FQButton>
                <I18nSpan reference="fq-manager.fq-button.1"/>
            </FQButton>
        </FQContainer>
    ) : null
}

FQQuote.propTypes = {
    quote: object,
}

export default FQQuote
