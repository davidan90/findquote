import React from 'react'
import { connect } from 'react-redux'
import { object ,instanceOf } from 'prop-types'
import { FQManager } from 'components'
import { quotesActions } from 'store/actions'
import { Quote } from '../../../models/index';

class FQManagerContainer extends React.Component {
    static contextTypes = {
        api: object,
    }

    static propTypes = {
        currentQuote: instanceOf(Quote),
    }

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        setInterval(this.handleInterval, 10000)
    }

    handleInterval = () => {
        const { api } = this.context
        const { loadQuote } = this.props

        api.getRandomQuote()
            .then( data => {
                loadQuote(data)
            })
    }

    render() {
        const { currentQuote } = this.props

        return currentQuote ? (
            <FQManager
                quoteLoaded={currentQuote}
            />
        ) : null
    }
}

const mapStateToProps = state => ({
    currentQuote: (() => {
        const q = state.quotes.currentQuote
        return new Quote(q._quote, q._author, q._category)
    })(),
})

const mapDispatchToProps = dispatch => ({
    loadQuote: (data) => {
        dispatch(quotesActions.loadQuote(data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FQManagerContainer)