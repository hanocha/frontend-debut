import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class GlobalNavBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Rakuraku DA
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default GlobalNavBar;
