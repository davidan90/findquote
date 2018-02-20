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

        return quoteList && quoteList.length ? (
            <FQQuoteList
                quotes={quoteList}
            />
        ) : null
    }
}

const mapStateToProps = state => ({
    quoteList: (() => state.quotes.quoteList.map(
        q => new Quote(q._quote, q._author, q._category)
    ))(),
})

export default connect(mapStateToProps)(FQQuoteListContainer)