import React from 'react'
import { connect } from 'react-redux'
import { object } from 'prop-types'
import { FQButton } from 'components'
import { quotesActions } from 'store/actions'

class FQButtonContainer extends React.Component {
    static contextTypes = {
        api: object,
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
        this.setState({loading: true})
        api.getRandomQuote()
            .then( data => {
                console.log('Data:', data)
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