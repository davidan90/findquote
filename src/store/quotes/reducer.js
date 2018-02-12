import { initialState } from './selectors'
import { ADD_QUOTE, REMOVE_QUOTE } from './constants'

export default (state = initialState, { type, payload }) => {
  let newState = Object.assign({}, state)

  switch (type) {
    case ADD_QUOTE:
      newState.currentList = newState.currentList.concat([payload])
      newState.lastQuoteLoaded = Object.assign(newState.lastQuoteLoaded, payload)
      break
    case REMOVE_QUOTE:
      newState.currentList = newState.currentList.slice(payload, 1)
      break

    default:
      break
  }
  return newState
}
