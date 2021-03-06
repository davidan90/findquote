import React from 'react'
import { string, bool, element, arrayOf, oneOfType } from 'prop-types'
import styled from 'styled-components'

const FQContainer = styled.div`
    margin: 1em;
    position: relative;
    display: ${props => props.inline ? 'inline-block' : props.flex ? 'flex' : 'block'};
    height: ${props => props.height ? props.height : 'auto'};
    width: ${props => props.width ? props.width : 'auto'};
`

FQContainer.propTypes = {
    children: oneOfType([
        element,
        arrayOf(element),
    ]),
    inline: bool,
    flex: bool,
    height: string,
    width: string,
}

export default FQContainer
