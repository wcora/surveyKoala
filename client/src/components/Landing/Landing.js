import React from "react";
import './landing.scss'

class Landing extends React.Component {
    render() {
        return (
            <div className={"landing"}>
                <div className="container">
                    <div className="row-cols-1">
                        <h1>
                            Survey Koala
                        </h1>
                    </div>

                    <div className="row-cols-1">
                        <p>
                            Collect feedback from your users
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Landing;
