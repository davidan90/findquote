import React from 'react'
import { connect } from 'react-redux'
import { object, func } from 'prop-types'
import { FQButton } from 'components'
import { quotesActions } from 'store/actions'
import { I18nSpan } from 'i18n'

class FQQuoteContainer extends React.Component {
    static propTypes = {
        quote: object,
        addQuote: func,
        removeQuote: func,
    }

    constructor(props){
        super(props)
        this.state = {
            added: false,
        }
    }

    handleClick = () => {
        const { added } = this.state
        if(!added) {
            add()
        }else {
            remove()
        }
    }

    add = () => {
        const { addQuote, quote } = this.props
        addQuote(quote)
        this.setState({added: true})
    }

    remove = () => {
        const { removeQuote, quote } = this.props
        removeQuote(quote)
        this.setState({added: false})
    }

    render() {
        const { added } = this.state
        const { quote } = this.props
        
        return (
            <FQQuote
                quote={quote}
            >
                <FQButton
                    onClick={this.handleClick}
                >
                {
                    added ? <I18nSpan reference="fq-manager.fq-button.2"/> : <I18nSpan reference="fq-manager.fq-button.1"/>
                }
                </FQButton>
            </FQQuote>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addQuote: (data) => {
        dispatch(quotesActions.addQuote(data))
    },
    removeQuote: (data) => {
        dispatch(quotesActions.removeQuote(data._id))
    }
})

export default connect(null, mapDispatchToProps)(FQQuoteContainer)