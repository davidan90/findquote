import React from 'react'
import { string, element, oneOf } from 'prop-types'
import styled from 'styled-components'

const switchHeight = (size) => {
    if (size) {
        switch (size) {
            case 'big':
                return '4em'
            case 'medium':
                return '2.1em'
            case 'small':
            default:
                return '1.3em'
        }
    }
} 

const FQButton = styled.button`
    color: ${props => props.color ? props.color : 'black'};
    height: ${props => switchHeight(props.size)};
`

FQButton.propTypes = {
    children: element,
    color: string,
    size: oneOf(['big', 'medium', 'small']),
}

FQButton.defaultProps = {
    children: <span>FQButton</span>,

}

export default FQButton