import React from 'react'
import { string, func } from 'prop-types'
import { connect } from 'react-redux'
import { ThemeButton } from 'components'
import { optionActions } from 'store/actions'

class ThemeButtonContainer extends React.Component {
    static propTypes = {
      theme: string,
      onChangeTheme: func,
    }

    componentWillMount() {}

    componentDidMount() {}

    render() {
      const { onChangeTheme, theme } = this.props
      return (
        <ThemeButton {...{ theme, onChangeTheme }} />
      )
    }
}

const mapStateToProps = state => ({
  theme: state.options.theme,
})

const mapDispatchToProps = dispatch => ({
  onChangeTheme: (theme) => {
    dispatch(optionActions.changeTheme(theme))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ThemeButtonContainer)
