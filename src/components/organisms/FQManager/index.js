import React from 'react'
import { object } from 'prop-types'
import { FQInput, FQContainer, FQQuoteList, FQQuote } from 'components'
import { FQButton } from 'containers'
import { I18nSpan } from 'i18n'

const FQManager = (props) => (
    <div>
        <FQContainer>
            {/* <FQButton>
                <I18nSpan reference={'fq-manager.fq-button.1'} />
            </FQButton> */}
        </FQContainer>
        <FQContainer>
            {/* <FQQuoteList
                quotes={props.listQuote}
            /> */}
            <FQQuote
                quote={props.quoteLoaded}
            />
        </FQContainer>
    </div>
)

FQManager.propTypes = {
    quoteLoaded: object,
}

export default FQManager
