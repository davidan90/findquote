import React from 'react'
import { connect } from 'react-redux'
import { object, arrayOf } from 'prop-types'
import { FQQuoteList } from 'components'

class FQQuoteListContainer extends React.Component {
    static propTypes = {
        quoteList: arrayOf(object),
    }

    constructor(props) {
        super(props)
    }

    render() {
        const { quoteList } = this.props

        return (
            <FQQuoteList
                quotes={quoteList}
            />
        )
    }
}

const mapStateToProps = state => ({
    quoteList: state.quotes.quoteList,
})

export default connect(mapStateToProps)(FQQuoteListContainer)