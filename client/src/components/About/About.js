import  Profile  from "../../assets/images/About2.png"
import React from "react";
import "./about.scss"

const About = () => {
    return (
        <div className="container" id={"about"}>
            <div className="row justify-content-md-center justify-content-lg-start">
                <div className="col-md-10 col-lg-6 text-right">
                    <h1>The Author</h1>
                </div>
            </div>
            <div className="row justify-content-md-center justify-content-lg-start">
                <div className="col-md-10 col-lg-6 text-right">
                    <div className="keywords">
                        <h5>RESEARCH&nbsp; •&nbsp;</h5>
                        <h5>DESIGN&nbsp;•   &nbsp;</h5>
                        <h5>DEVELOPMENT</h5>
                    </div>
                </div>
            </div>
            <div className="row justify-content-md-center">
                <div className="col-md-10 col-lg-5 text-left">
                    <div className="content">
                        <p>Hello there! This is Cora Wang!</p>

                        <p>This app allows you to send out surveys via email to your users and let them vote on something.
                            Login via your google account and start to send out surveys for a small payment amount. $1 for
                            a survey, send to as many people as you want!
                            You can view the result of your surveys in your dashboard. Check it out!
                        </p>

                        <p>I view myself as a full-stack and UX engineer who works on a hybrid of design and engineering.
                            I design for real needs and code it into tangible user experience. I am currently completing
                            a master’s in Human-Computer Interaction at Carnegie Mellon University, School of Computer
                            Science.</p>
                    </div>
                    <br/>
                    <p>Get in touch with me via <a href="mailto:cora.jwang@gmail.com">email</a> or visit my portfolio
                        at <a target="_blank" href="https://corawang.dev">corawang.dev</a>!</p>
                </div>
                <div className="col-md-10 col-lg-5 text-left">
                    <img className="aboutImage" src={Profile} alt={"profile"}/>
                </div>
            </div>
        </div>
    )
}

export default About;
