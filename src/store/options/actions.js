import { CHANGE_THEME } from './constants'

const changeTheme = theme => ({
  type: CHANGE_THEME,
  payload: {
    theme,
  },
})

export const optionActions = {
  changeTheme,
}
