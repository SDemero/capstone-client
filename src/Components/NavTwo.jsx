import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav ,FormControl,Button,Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class NavTwo extends Component{
    
    render(){
        return(
<>
  
  <br />
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/userhomepage">Home</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href ="/">Logout</Nav.Link>
      <Nav.Link href="/userpage">Dash</Nav.Link>
      <Nav.Link href="/bmi">Calculate your BMI</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>

  
</>
        )
    }
}
