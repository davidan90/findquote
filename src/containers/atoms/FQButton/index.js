import React from 'react'
import { connect } from 'react-redux'
import { object, func } from 'prop-types'
import { FQButton } from 'components'
import { quotesActions } from 'store/actions'

class FQButtonContainer extends React.Component {
    static contextTypes = {
        api: object,
    }

    static propTypes = {
        addQuote: func,
    }

    constructor(props){
        super(props)
        this.state = {
            loading: false,
        }
    }

    handleClick = () => {
        const {
            api,
        } = this.context
        const {
            addQuote
        } = this.props
        this.setState({loading: true})
        api.getRandomQuote()
            .then( data => {
                addQuote(data)
                this.setState({loading: false})
            })
    }

    render() {
        const {
            loading
        } = this.state
        
        return (
            <FQButton
                disabled={loading}
                onClick={this.handleClick}
            />
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addQuote: (data) => {
        dispatch(quotesActions.addQuote(data))
    }
})

export default connect(null, mapDispatchToProps)(FQButtonContainer)