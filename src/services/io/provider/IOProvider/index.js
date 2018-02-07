import React from 'react'
import { object } from 'prop-types'

export class IOProvider extends React.Component {
  static propTypes = {
    children: object,
    io: object.isRequired,
  }

  static childContextTypes = {
    io: object,
  }

  getChildContext() {
    const { io } = this.props
    return { io }
  }

  render() {
    return this.props.children
  }
}
