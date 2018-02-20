import React from 'react'
import { connect } from 'react-redux'
import { object, arrayOf, instanceOf } from 'prop-types'
import { FQQuoteList } from 'components'
import { Quote } from '../../../models'

class FQQuoteListContainer extends React.Component {
    static propTypes = {
        quoteList: arrayOf(instanceOf(Quote)),
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