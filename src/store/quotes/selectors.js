import { Quote } from '../../models'

export const initialState = {
  quoteList: [],
  currentQuote: undefined,
}

export const getAllQuotes = (state = initialState) => state.quoteList || []
export const getLastQuote = (state = initialState) => state.currentQuote || new Quote()
export const getQuoteById = (state = initialState, id) => state.quoteList[id] || {}
