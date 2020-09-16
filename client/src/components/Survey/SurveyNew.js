import React from "react";
import { reduxForm } from "redux-form";
import SurveyForm from "./surveyForm";
import SurveyReview from "./surveyReview";
import surveyForm from "./surveyForm";

class SurveyNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            review: false,
        }
    }
    renderForm() {
        if (this.state.review) {
            return <SurveyReview onSurveyReturn={
                () => this.setState({review:false})
            }/>
        }
        return <SurveyForm onSurveySubmit= {
            () => this.setState({review:true})
        }/>
    }
    render() {
        return (
            <div>
                {this.renderForm()}
            </div>
        )
    }
}
export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);
