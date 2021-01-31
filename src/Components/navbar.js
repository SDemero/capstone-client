import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav ,FormControl,Button,Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


export default class NavBar extends Component{
    
    render(){
        return(

  
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/">Home</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href ="/login">Login</Nav.Link>
      <Nav.Link href="/signup">Sign up</Nav.Link>
      {/* <Nav.Link href="/bmi">Calculate your BMI</Nav.Link> */}
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form> */}
  </Navbar>
  
  

        )
    }
}