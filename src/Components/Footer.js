import React, { Component } from 'react';
import { Navbar, Container, Col } from 'react-bootstrap';

export class Footer extends Component {
  
    render() {

        let date = new Date()
        return (
            <Navbar fixed="bottom" bg="primary" variant="dark">
                <Container>
                    <Col lg={12} className="text-center text-muted" >
                        <div className="text-white">{date.getFullYear() + "-" + (date.getFullYear() + 1)}, All Rights Reserved by....</div>
                    </Col>
                </Container>
            </Navbar>
        );
    }
}

export default Footer;