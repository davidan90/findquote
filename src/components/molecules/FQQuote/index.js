import React from 'react'
import styled from 'styled-components'
import { bool, instanceOf } from 'prop-types'
import { FQContainer, FQParagraph } from 'components'
import { Quote } from '../../../models'
import { I18nSpan } from 'i18n'

const _FQQuote = styled.div`
    background-color: ${props => props.theme.palette.primary[0]};
    border: 1px solid ${props => props.theme.palette.secondary[3]};
    border-radius: 5px;
    margin: 0.2em;
    padding: 0.2em;
`

const FQQuote = (props) => {
    const {
        quote
    } = props

    return quote ? (
        <_FQQuote>
            <FQParagraph>
                {quote.quote}
            </FQParagraph>
            <FQParagraph>
                {quote.author}
            </FQParagraph>
            { props.children }
        </_FQQuote>
    ) : null
}

FQQuote.propTypes = {
    quote: instanceOf(Quote).isRequired,
}

export default FQQuote
