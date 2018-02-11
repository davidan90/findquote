import React from 'react'
import { FQInput, FQButton, FQParagraph, FQContainer } from 'components'

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
