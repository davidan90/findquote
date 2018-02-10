import React from 'react'
import { string, element, arrayOf, oneOfType } from 'prop-types'
import styled from 'styled-components'

const FQFooterWrapper = styled.footer`
    display: flex;
    position: relative;
    width: 100%;
    background-color: ${props => props.bkColor ? props.bkColor : 'white'};
    height: ${props => props.height ? props.height : 'auto'};
`

const FQFooter = props => (
    <FQFooterWrapper
        bkColor={props.bkColor}
        height={props.height}
    >
    {/* TODO */}
    </FQFooterWrapper>
)

FQFooter.propTypes = {
    bkColor: string,
    height: string,
}

export default FQFooter
