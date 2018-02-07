import { initialState } from './selectors'
import { CHANGE_THEME } from './constants'

export default (state = initialState, { type, payload }) => {
  const newState = Object.assign({}, state)

  switch (type) {
    case CHANGE_THEME:
      newState.theme = payload.theme
      break

    default:
      break
  }
  return newState
}
