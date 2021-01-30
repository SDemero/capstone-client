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
                {/* <label>this.state.firstname + this.state.lastname</label>
                <label>this.state.email</label>
                <label>this.state.weight</label>
                <label>this.state.height</label>
                <label>this.state.age</label>
                <label>this.state.caloriesBurned</label>
                <label>this.state.BMI</label> */}
                <Link to="./bmi">Calculate BMI Here</Link>
                <Link to="./userdash">Dashboard</Link>
                
                <Router>
                    <Switch>
                        <Route path="/Userpage/Exercise">Exercise</Route>
                        <Route path="/UserPage/Nutrition">Nutrition</Route>
                        <Route path="/userdash"></Route>
                    </Switch>
                </Router>

                
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