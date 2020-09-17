import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from "./Header";
import Landing from "./Landing/Landing";
import SurveyNew from "./Survey/SurveyNew";
import Dashboard from "./Dashboard/Dashboard";
import About from "./About/About"
import Footer from "./Footer/Footer";
import './App.scss';

class App extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route path="/" component={Landing} exact/>
                        <Route path="/surveys/new" component={SurveyNew}/>
                        <Route path="/surveys" component={Dashboard} exact/>
                        <Route path="/about" component={About} exact/>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);

// Rendering layer control
