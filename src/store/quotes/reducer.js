import { initialState, getAllQuotes } from './selectors'
import { ADD_QUOTE, REMOVE_QUOTE, LOAD_QUOTE } from './constants'
import { Quote } from '../../models/index';

export default (state = initialState, { type, payload }) => {
  let newState = Object.assign({}, state)

  switch (type) {
    case LOAD_QUOTE:
      newState.currentQuote = new Quote(payload.quote, payload.author, payload.category)
      break

    case ADD_QUOTE:
      newState.quoteList = newState.quoteList.concat([
        new Quote(payload.quote, payload.author, payload.category)
      ])
      break

    case REMOVE_QUOTE:
      newState.quoteList = newState.quoteList.filter(q => q._quote !== payload.quote)
      break

    default:
      break
  }
  return newState
}
