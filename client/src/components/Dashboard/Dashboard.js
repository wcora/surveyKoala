import React from "react";
import './Dashboard.scss'
import { Link } from "react-router-dom";
import SurveyList from "../Survey/SurveyList";

class Dashboard extends React.Component {
    render() {
        return (
            <div className={"dashboard"}>
                <SurveyList />
                <div>
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
