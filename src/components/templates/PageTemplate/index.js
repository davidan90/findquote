import React, { Component } from 'react'
import styled from 'styled-components'
import { any } from 'prop-types'
import { Container } from 'semantic-ui-react'

export default class PageTemplate extends Component {
  constructor(children) {
    super(children)
    this.state = {
      visible: false,
    }
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state

    return (
      <Container>
        {this.props.children}
      </Container>
    )
  }
}

PageTemplate.propTypes = {
  children: any.isRequired,
}
