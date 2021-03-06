import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import { connect } from 'react-redux'
import Stripe from './Stripe/Stripe'

class Header extends React.Component {
    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <Nav.Link href="/auth/google">Login with Google</Nav.Link>
                )
            default:
                return (
                    <div style={{"display" : "inline-flex"}}>
                        <Nav.Link href="#" style={{"color" : "#a0a0a0"}}>Balance: ${this.props.auth.credit} </Nav.Link>
                        <NavDropdown className={"ml-auto"} title={"Hi! "+  this.props.auth.name } id="nav-dropdown__account">
                            <NavDropdown.Item href="/surveys">Account</NavDropdown.Item>
                            <NavDropdown.Item href="#"><Stripe/></NavDropdown.Item>
                            <NavDropdown.Item href="#">Balance: ${this.props.auth.credit} </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/api/logout">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                )
        }
    }

    renderSurveys() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return;
            default:
                return (
                    <NavDropdown title="Surveys" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/surveys">View Survey Dashboard</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="/surveys/new">Create New Survey</NavDropdown.Item>
                    </NavDropdown>
                )

        }
    }
    render() {
        // console.log(this.props)
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">SK</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        {this.renderSurveys()}
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                    {this.renderContent()}
                    {/*<Form inline>*/}
                    {/*    <FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}
                    {/*    <Button variant="outline-success">Search</Button>*/}
                    {/*</Form>*/}
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

function mapStateToProps({auth}) {
    return { auth };
}

export default connect(mapStateToProps)(Header);
