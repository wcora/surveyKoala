// SurveyFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from "../../actions";

const SurveyReview = ({ onSurveyReturn, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        );
    });
    return (
        <div>
            {reviewFields}
            <div className={"btn btn-flat survey--review--back"}
            onClick={onSurveyReturn}>Edit Survey</div>
            <div className={"btn btn-flat survey--review--submit"}
            onClick={() => submitSurvey(formValues, history)}>
                Confirm
            </div>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    }
}
export default connect(mapStateToProps, actions)(withRouter(SurveyReview));
