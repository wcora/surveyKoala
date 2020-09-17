import React from "react";
import './Dashboard.scss'
import { Link } from "react-router-dom";
import SurveyList from "../Survey/SurveyList";

class Dashboard extends React.Component {
    render() {
        return (
            <div className={"dashboard container"}>
                <div className="row dashboard--title">
                    <h3 className="col-12">Survey Dashboard</h3>
                    <p className="col-12">View all surveys you've sent out in the past and user responses.</p>
                    <div className="col-12 ml-auto">

                        <div to="/surveys/new"
                              type=""
                              className="btn btn-start-new">
                            Start a new survey
                        </div>
                    </div>
                </div>

                <div className="row dashboard--surveys">
                    <div className="col-12">
                        <SurveyList />
                    </div>
                </div>
                <div className="dashboard--surveys__new">
                    <Link to="/surveys/new"
                          type="button"
                          className="btn btn-circle btn-md">
                        <span>+</span>
                    </Link>
                </div>
            </div>
        )
    }
}
export default Dashboard;
