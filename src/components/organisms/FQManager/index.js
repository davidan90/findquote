import React from 'react'
import { object } from 'prop-types'
import { FQInput, FQContainer, FQQuote } from 'components'
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
            <FQQuote
                quote={props.lastQuote}
            />
        </FQContainer>
    </div>
)

FQManager.propTypes = {
    lastQuote: object,
}

export default FQManager
