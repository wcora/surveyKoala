import React from "react";
import _ from "lodash";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./surveyField";
import { Link } from 'react-router-dom'
import validateEmails from "./utils/validateEmails";
import './survey.scss'
import formFields from './formFields';

class SurveyForm extends React.Component {
    renderFields() {
        return _.map(formFields, ({ label, name }) => {
            return (
                <Field
                    key={name}
                    component={SurveyField}
                    type="text"
                    label={label}
                    name={name}
                />
            );
        });
    }
    render() {
        return (
            <div className={"survey row justify-content-center"}>
                <form className={"survey--form col-lg-6 col-md-8 col-sm-10"}
                      onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    <h3>New Survey Form</h3>
                    { this.renderFields() }
                    <div className="survey--btn">
                        <Link to={"/surveys"} className={"btn survey--btn__cancel"}> Cancel </Link>
                        <button type={"submit"} className={"btn survey--btn__submit ml-auto"}>Submit</button>
                        <div style={{"clear":"both"}}></div>
                    </div>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};
    errors.recipients = validateEmails(values.recipients || '');

    _.each(formFields, ({name, noValueError }) => {
        if (!values[name]) {
            errors[name] = noValueError;
        }
    })

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);

