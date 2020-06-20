import React, { Component } from 'react';

import './App.css';

import NavigationBar from './Components/NavigationBar';
import { Container, Row, Col } from 'react-bootstrap';
import Welcome from './Components/Welcome';
import Footer from './Components/Footer';
import AddUser from './Components/AddUser';
import ListUser from './Components/ListUser';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export class App extends Component {

  marginTop = {
    margin: "20px"
  };

  

  render() {

    return (
      <Router>
        <NavigationBar />
        <Container>
          <Row>
            <Col lg={12} style={this.marginTop}>
              <Switch>
                <Route path="/" exact component={Welcome} />
                <Route path="/add" exact component={AddUser} />
                <Route path="/list" exact component={ListUser} />
              </Switch>
            </Col>
          </Row>
        </Container>
        <Footer />
        
      </Router>
    );
  }
}

export default App;
