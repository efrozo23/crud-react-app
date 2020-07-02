import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {

    render() {
        return (
            <Navbar bg="primary" variant="dark">
                <Link to={"/"} className="navbar-brand">
                    <Image src="https://image.flaticon.com/icons/svg/306/306232.svg" height="25" width="25" roundedCircle /> Users
                </Link>
                <Nav className="mr-auto">
                    <Link to={"add"} className="nav-link">Add User</Link>
                    <Link to={"list"} className="nav-link">List User</Link>
                </Nav>
            </Navbar>
        );
    }
}

export default NavigationBar;