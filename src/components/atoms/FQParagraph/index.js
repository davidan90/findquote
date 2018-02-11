import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

const FQParagraph = styled.p`
    position: relative;
    height: ${props => props.height ? props.height : 'auto'};
    width: ${props => props.width ? props.width : 'auto'};
`

FQParagraph.propTypes = {
    children: string,
    height: string,
    width: string,
}

export default FQParagraph
