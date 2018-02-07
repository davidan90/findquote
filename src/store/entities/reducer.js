import { initialState } from './selectors'
import { LOAD_USER_ENTITIES, UPDATE_FILTER_ENTITY, DELETE_FILTER_ENTITY } from './constants'

export default (state = initialState, { type, payload }) => {
  let newState = Object.assign({}, state)

  switch (type) {
    case LOAD_USER_ENTITIES:
      newState = Object.assign(newState, payload)
      break
    case UPDATE_FILTER_ENTITY:
      newState.mffilters[payload.filter.id] = Object.assign(newState.mffilters[payload.filter.id], payload.filter)
      break
    case DELETE_FILTER_ENTITY:
      delete newState.mffilters[payload.id]
      break

    default:
      break
  }
  return newState
}
