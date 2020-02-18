import React, { Component } from "react";
import { Fragment } from 'react';
import {
    Navbar, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <Fragment>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/">
                        Email Feedback
                </NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="d-flex align-items-center">
                            <NavLink className="font-weight-bold" href="/">Home</NavLink>
                        </NavItem>
                        <NavItem className="d-flex align-items-center">
                            <NavLink className="font-weight-bold" href="https://www.techiediaries.com/react-bootstrap">
                                Login with Google
                    </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </Fragment>
        );
    }
}
export default Header