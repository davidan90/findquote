import React from 'react'
import { string, func, object } from 'prop-types'

const en = require('../../json/en.json')
const es = require('../../json/es.json')

const dictionary = {
  en,
  es,
}

const translate = lang => (reference) => {
  if (typeof reference === 'string') {
    let json = lang ? dictionary[lang] : 'en'
    reference.split('.')
      .forEach((key) => {
        json = json[key]
      })
    return json ? json.toString() : reference
  }
  return undefined
}

export class I18nProvider extends React.Component {
  static propTypes = {
    children: object,
    lang: string.isRequired,
    translate: func,
  }

  static childContextTypes = {
    lang: string.isRequired,
    translate: func,
  }

  getChildContext() {
    const { lang } = this.props
    return { lang, translate: translate(lang) }
  }

  render() {
    return this.props.children
  }
}
