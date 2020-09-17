import React from "react";
import './landing.scss'
import Wave from '../../assets/images/wave.png';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const style = {
    backgroundImage: `url(${Wave})`,
}

class Landing extends React.Component {
    renderButton(){
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <a href="/auth/google" className="btn landing--btn">
                        Login with Google
                    </a>
                )
            default:
                return (
                    <Link to="/surveys/new"
                          type="button"
                          className="btn landing--btn">Get Started</Link>
                )
        }
    }

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
                            Collect feedback from your users.
                        </p>
                        {this.renderButton()}
                    </div>
                </div>
                <section className="wave--container">
                    <div className="wave wave1" style={style}></div>
                    <div className="wave wave2" style={style}></div>
                    <div className="wave wave3" style={style}></div>
                    <div className="wave wave4" style={style}></div>
                </section>
            </div>
        )
    }
}

function mapStateToProps({auth}) {
    return { auth };
}

export default connect(mapStateToProps)( Landing );
