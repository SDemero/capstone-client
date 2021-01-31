import React, {Component,useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Navbar, Nav ,FormControl,Button,Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from "../context/AuthContext";



export default function NavTwo (){
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/")
    } catch {
      setError("Failed to log out")
    }
  }
  
  
    
    
        return(
          
<>
  
  
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/userhomepage">Home</Navbar.Brand>
    <Nav className="mr-auto">
      {/* <Nav.Link href ="/">Logout</Nav.Link> */}
      <Nav.Link href="/userdash">Dash</Nav.Link>
      {/* <Nav.Link href="/bmi">Calculate your BMI</Nav.Link> */}
    </Nav>
    <Form>
      <Button variant= "primary" onClick={handleLogout}>
          Log Out
        </Button>
    </Form>
  </Navbar>

  
</>
        )
    
}
