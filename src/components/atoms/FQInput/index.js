import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

const FQInputWrapper = styled.div`
    display: inline-block;
    margin 0 0.2em;
    height: ${props => props.height ? props.height : 'auto'};
    width: ${props => props.width ? props.width : 'auto'};
`

const FQInput = props => (
    <FQInputWrapper>
        <input 
            type={props.type}
            placeholder={props.placeholder}
        />
    </FQInputWrapper>
)

FQInput.propTypes = {
    type: string,
    placeholder: string,
    height: string,
    width: string,
}

export default FQInput
