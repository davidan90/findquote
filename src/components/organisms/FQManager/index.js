import React from 'react'
import { FQInput, FQParagraph, FQContainer } from 'components'
import { FQButton } from 'containers'

const FQManager = () => (
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
            <FQParagraph>
                TODOOOO
            </FQParagraph>
        </FQContainer>
    </div>
)

export default FQManager
