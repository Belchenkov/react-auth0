import React, { Component } from 'react';
import Auth0Lock from 'auth0-lock';

import { Grid, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Header from './Components/Header';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Grid>
            <Row>
              <Col xs={12} md={12}>
                <Home />  
              </Col>
            </Row>   
          </Grid>
      </div>
    );
  }
}

export default App;
