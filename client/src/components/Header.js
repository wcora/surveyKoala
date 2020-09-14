import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

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
                    <NavDropdown className={"ml-auto"} title={"Hi! "+  this.props.auth.name } id="nav-dropdown__account">
                        <NavDropdown.Item href="#a">Account</NavDropdown.Item>
                        <NavDropdown.Item href="#"><Stripe/></NavDropdown.Item>
                        <NavDropdown.Item href="#">Balance: ${this.props.auth.credit} </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/api/logout">Logout</NavDropdown.Item>
                    </NavDropdown>
                )
        }
    }
    render() {
        console.log(this.props)
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">SK</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Surveys" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
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