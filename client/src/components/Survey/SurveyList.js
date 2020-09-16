import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys, deleteSurvey } from '../../actions';

import './surveyList.scss'
class SurveyList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {

    return  [...this.props.surveys].reverse().map(survey => {
      return (
        <div className="card" key={survey._id}>

          <div className="card-header">
            {new Date(survey.dateSent).toLocaleDateString()}
          </div>
          <div className="card-body">
            <h4 className="card-title">{survey.title}</h4>
            <h6 className="card-subtitle mb-2 text-muted">Survey Subject: {survey.subject}</h6>
            <p className="card-text">
              {survey.body}
            </p>
            <div className="card-action row">
              <div className="col-6">
                <h5>Agree</h5>
                <a> {survey.yes}</a>
              </div>
              <div className="col-6">
                <h5>Disagree</h5>
                <a>{survey.no}</a>
              </div>
            </div>
            <div className="btn"
                 onClick={this.props.deleteSurvey.bind(this, survey._id)}>
              Archive
            </div>
          </div>
        </div>
      );
    });

  }

  render() {
    return (
      <div>
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  const initialState = []
  return { initialState, surveys } ;
}

export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(SurveyList);
