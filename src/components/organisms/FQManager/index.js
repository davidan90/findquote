import React from 'react'
import { object } from 'prop-types'
import { FQInput, FQContainer, FQQuote } from 'components'
import { FQButton } from 'containers'

const FQManager = (props) => (
    <div>
        <FQContainer>
            <FQInput
                type={'text'}
                placeholder={'Example'}
                width={'100%'}
            />
            <FQButton />
        </FQContainer>
        <FQContainer>
            <FQQuote
                lastQuote={props.lastQuote}
            />
        </FQContainer>
    </div>
)

FQManager.propTypes = {
    lastQuote: object,
}

export default FQManager
