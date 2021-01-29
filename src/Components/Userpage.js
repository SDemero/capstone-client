import React, {Component} from 'react';
import UpdateProfile from './UpdateProfile';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Dashboard from './Dashboard';
import Exercise from './Exercise';
import BMI from './BMI';


class Userpage extends Component{
    constructor(props){
        super(props);

        this.state = {
            firstname: "Spongebob",
            lastname: "Squarepants",
            email: "sponge@krustykrab.com",
            weight: 3,
            BMI: "",
            age: 25,
        }
    
    this.BMICal = this.BMICal.bind(this);
    }

    BMICal = () => {
        let metricResult = this.state.weight * 703 / this.state.height;
        this.setState({BMI: metricResult})
    }


    render(){
        return(
            <div>
                
                <Link to="./bmi">here</Link>
                
                <Router>
                    <Switch>
                        <Route path="/Userpage/Exercise">Exercise</Route>
                        <Route path="/UserPage/Nutrition">Nutrition</Route>
                    </Switch>
                </Router>

                {/* <Dashboard
                    //showing the user profile
                    firstname={this.state.firstname}
                    lastname={this.state.lastname}
                    email={this.state.email}
                    weight={this.state.weight}
                    height={this.state.height}
                />

                <UpdateProfile
                    //send to update user info
                    
                />

                <BMI
                    weight= {this.state.weight}
                    height={this.state.height}
                />
                */}
                <Exercise/> 

                {/*show as cards*/}
                {/*import Stats Component???}*/}

                {/*import Exericse Component*/}
                {/*import Nutrition Component*/}
                
                {/*import Logout Component}*/}
                
            </div>
        )
    }
}
export default Userpage;