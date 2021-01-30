import React, { useState } from "react"
import { Card, Button, Alert,Navbar } from "react-bootstrap"
import { useAuth } from "../context/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Exercise from './Exercise/Exercise';

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
  <Navbar>
  <Navbar.Brand href="/userhomepage">Home</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: <a href="/updateprofile">{currentUser.email}</a>
    </Navbar.Text>
    <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
   
  </Navbar.Collapse>
  </Navbar>
      <Card>
        <Card.Body>
          
        </Card.Body>

      </Card>
     
    </>
  )
}