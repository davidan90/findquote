import React from 'react'
import { connect } from 'react-redux'
import { object } from 'prop-types'
import { FQManager } from 'components'

class FQManagerContainer extends React.Component {
    static propTypes = {
        lastQuoteLoaded: object,
    }

    constructor(props) {
        super(props)
        console.log('constructor')
    }

    render() {
        const {
            lastQuoteLoaded
        } = this.props

        return (
            <FQManager
             lastQuote={lastQuoteLoaded}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lastQuoteLoaded: state.quotes.lastQuoteLoaded,
    }
}

export default connect(mapStateToProps)(FQManagerContainer)