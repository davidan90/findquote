// https://github.com/diegohaz/arc/wiki/Reducers
import camelCase from 'lodash/camelCase'
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { reducer as thunk } from 'redux-saga-thunk'

import * as entities from './entities/reducer'
import * as options from './options/reducer'

const reducers = {
  entities,
  options,
  form,
  thunk,
}

const req = require.context('.', true, /\.\/.+\/reducer\.js$/)

req.keys().forEach((key) => {
  const storeName = camelCase(key.replace(/\.\/(.+)\/.+$/, '$1'))
  reducers[storeName] = req(key).default
})

export default combineReducers(reducers)
