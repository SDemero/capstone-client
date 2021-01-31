import React from "react"
import Signup from "./Signup"
import  {Container}  from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import  { AuthProvider } from "../context/AuthContext"
import Home from "./Home"
import HomeTwo from "./HomeTwo"
import BMI from "./BMI/BMI"
import NavBar from "./NavBar"
import Userpage from "./Userpage"
import Exercise from "./Exercise/Exercise"
import Equipment from "./Equipment/Equipment"




function App() {
  return (
    <div className = "container-big">
      <>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/userdash" component={Dashboard} />
              <PrivateRoute path="/updateprofile" component={UpdateProfile} />
              <Route exact path="/" component={Home}/>
              <Route path="/userpage" component={Userpage}/>
              <PrivateRoute path="/userhomepage" component={HomeTwo}/>
              <Route path="/exercise" component={Exercise}/>
              <Route path="/BMI" component={BMI}/>
              <Route path="equipment" component={Equipment}/>
              <Container
                className="d-flex align-items-center justify-content-center"
                 style={{ minHeight: "100vh" }}>
                  <div className="w-100" style={{ maxWidth: "400px" }}>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              
              </div>
              </Container>
            </Switch>
          </AuthProvider>
        </Router>
      </>
    </div>
  )
}

export default App