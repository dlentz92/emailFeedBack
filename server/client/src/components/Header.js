import React, { Component } from "react";
import { connect } from "react-redux"
import { Fragment } from 'react';
import {
    Navbar, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';


class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li><a href = "/auth/google"></a>"Login with Google</li>
                )
            default:
                return <li><a>Logout</a></li>;
        }
    }
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
                            <NavLink className="font-weight-bold" href="">
                                {this.renderContent()}
                    </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth }
}
export default connect(mapStateToProps)(Header)