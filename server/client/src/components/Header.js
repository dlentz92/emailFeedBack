import React, { Component } from "react";
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { Fragment } from 'react';


class Header extends Component {
  renderContent() {
    console.log(this.props)
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login With Google</a></li>
      default:
        return <li><a>Logout</a></li>
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Email Feedback</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down right">
            <li><a href="">Login With Google</a></li>
            <li><a href="">Components</a></li>
            <li><a href="">JavaScript</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth }
}
export default connect(mapStateToProps)(Header)