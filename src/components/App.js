import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import  { AuthProvider } from "../context/AuthContext"
import Home from "./Home"
<<<<<<< Updated upstream

=======
import BMI from "./BMI"
>>>>>>> Stashed changes

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/userDash" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
<<<<<<< Updated upstream
              <Route path= "/dash" component = {Home}/>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              
=======
              <Route path="/dash" component={Home}/>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/bmi" component={BMI}/>
>>>>>>> Stashed changes
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App