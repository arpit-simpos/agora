import React, { Component } from 'react';
import { Container } from 'reactstrap';
import  NavMenu  from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />
        <Container>
          {this.props.children}
          
        </Container>
        <Container id="app"></Container>
      {/* <div id="app"></div> */}
      </div>
      
    );
  }
}
