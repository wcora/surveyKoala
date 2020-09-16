import React, { Component } from 'react';
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from '../../actions'
class Stripe extends Component {
    render() {
        return (
            <StripeCheckout
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                name={"SurveyKoala"}
                description={"$5.0 for 5 survey credits!"}
            >
                Add Credits
            </StripeCheckout>
        )
    }
}
export default connect(null, actions)(Stripe);
