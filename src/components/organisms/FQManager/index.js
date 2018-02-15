import React from 'react'
import { object, arrayOf } from 'prop-types'
import { FQInput, FQContainer, FQQuoteList } from 'components'
import { FQButton } from 'containers'
import { I18nSpan } from 'i18n'

const FQManager = (props) => (
    <div>
        <FQContainer>
            {/* <FQInput
                type={'text'}
                placeholder={'Example'}
                width={'100%'}
            /> */}
            <FQButton>
                <I18nSpan reference={'fq-manager.fq-button.1'} />
            </FQButton>
        </FQContainer>
        <FQContainer>
            <FQQuoteList
                quotes={props.listQuote}
            />
        </FQContainer>
    </div>
)

FQManager.propTypes = {
    listQuote: arrayOf(object),
}

export default FQManager
