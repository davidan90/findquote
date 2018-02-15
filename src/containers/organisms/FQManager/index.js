import React from 'react'
import { connect } from 'react-redux'
import { object, arrayOf } from 'prop-types'
import { FQManager } from 'components'

class FQManagerContainer extends React.Component {
    static propTypes = {
        quoteList: arrayOf(object),
    }

    constructor(props) {
        super(props)
    }

    render() {
        const {
            quoteList
        } = this.props

        return (
            <FQManager
                listQuote={quoteList}
            />
        )
    }
}

const mapStateToProps = state => ({
    quoteList: state.quotes.currentList,
})

export default connect(mapStateToProps)(FQManagerContainer)