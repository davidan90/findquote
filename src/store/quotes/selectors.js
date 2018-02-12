import { Quote } from '../../models'

export const initialState = {
  currentList: [],
  lastQuoteLoaded: new Quote(),
}

export const getAllQuotes = (state = initialState) => state.currentList || []
export const getLastQuote = (state = initialState) => state.lastQuoteLoaded || new Quote()
export const getQuoteById = (state = initialState, id) => state.currentList[id] || {}
