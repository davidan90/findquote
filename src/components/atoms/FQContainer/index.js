import React from 'react'
import { string, element, arrayOf, oneOfType } from 'prop-types'
import styled from 'styled-components'

const FQContainer = styled.div`
    display: block;
    margin: 1em;
    position: relative;
    height: ${props => props.height ? props.height : 'auto'};
    width: ${props => props.width ? props.width : 'auto'};
`

FQContainer.propTypes = {
    children: oneOfType([
        element,
        arrayOf(element),
    ]),
    height: string,
    width: string,
}

export default FQContainer
