import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys, deleteSurvey } from '../../actions';

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
            <h5 className="card-title">{survey.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Survey Subject: {survey.subject}</h6>
            <p className="card-text"></p>
            <div className="card-action">
                <a>Yes: {survey.yes}</a> &nbsp;
                <a>No: {survey.no}</a>
            </div>
            <div className="btn btn-danger" onClick={this.props.deleteSurvey.bind(this, survey._id)}>Delete Survey</div>
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
