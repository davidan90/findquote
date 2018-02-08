import React from 'react'
import { object } from 'prop-types'

export class ApiProvider extends React.Component {
  static propTypes = {
    children: object,
    api: object.isRequired,
  }

  static childContextTypes = {
    api: object,
  }

  getChildContext() {
    const { api } = this.props
    return { api }
  }

  render() {
    return this.props.children
  }
}
