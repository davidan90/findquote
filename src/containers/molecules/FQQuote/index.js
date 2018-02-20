import React from 'react'
import { connect } from 'react-redux'
import { bool, object, func } from 'prop-types'
import { FQQuote, FQButton } from 'components'
import { quotesActions } from 'store/actions'
import { I18nSpan } from 'i18n'

class FQQuoteContainer extends React.Component {
    static propTypes = {
        quote: object,
        quoteAdded: bool,
        addQuote: func,
        removeQuote: func,
    }

    constructor(props) {
        super(props)
    }

    add = () => {
        const { addQuote, quote } = this.props
        addQuote(quote)
    }

    remove = () => {
        const { removeQuote, quote } = this.props
        removeQuote(quote)
    }

    render() {
        const { quote, quoteAdded } = this.props

        return quote ? (
            <FQQuote
                quote={quote}
            >
                {
                    !quoteAdded ? (
                        <FQButton
                            onClick={this.add}
                        >
                            <I18nSpan reference="fq-manager.fq-button.1" />
                        </FQButton>
                    ) : (
                        <FQButton
                            onClick={this.remove}
                        >
                            <I18nSpan reference="fq-manager.fq-button.2" />
                        </FQButton>
                    )
                }

            </FQQuote>
        ): null
    }
}

const mapDispatchToProps = dispatch => ({
    addQuote: (data) => {
        dispatch(quotesActions.addQuote(data))
    },
    removeQuote: (data) => {
        dispatch(quotesActions.removeQuote(data.quote))
    }
})

export default connect(null, mapDispatchToProps)(FQQuoteContainer)