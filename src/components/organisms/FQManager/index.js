import React from 'react'
import { object, instanceOf } from 'prop-types'
import { FQContainer } from 'components'
import { FQQuoteList, FQQuote } from 'containers'
import { I18nSpan } from 'i18n'
import { Quote } from '../../../models/index';

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
    quoteLoaded: instanceOf(Quote),
}

export default FQManager
