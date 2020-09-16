// SurveyFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from "../../actions";
import './survey.scss';
import './surveyReview.scss'

const SurveyReview = ({ onSurveyReturn, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div className={"rows-col-1 survey--form--field"}
                key={name}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        );
    });
    return (
        <div className="survey survey--review row justify-content-center">
            <div className={"survey--form col-lg-6 col-md-8 col-sm-10"}>
                <h3>Review Survey Form</h3>

                {reviewFields}

                <div className={"btn survey--review--back"}
                onClick={onSurveyReturn}>Edit Survey</div>
                <div className={"btn survey--review--submit"}
                onClick={() => submitSurvey(formValues, history)}>
                    Confirm
                </div>
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
