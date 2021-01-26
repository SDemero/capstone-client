import React, {Component} from 'react';
import UpdateProfile from './UpdateProfile';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class Userpage extends Component{
    constructor(props){
        super(props);

        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            weight: "",
            BMI: "",
            age: "",
            caloriesBurned: 0,
        }
    
    this.BMICal = this.BMICal.bind(this);
    }

    BMICal = () => {
        let metricResult = this.state.weight * 703 / this.state.height;
        this.setState({BMI: metricResult})
    }

    componentDidMount = () => {
        this.setState({caloriesBurned: this.state.caloriesBurned + exercise.calories})
    }


    render(){
        return(
            <div>
                <label>this.state.firstname + this.state.lastname</label>
                <label>this.state.email</label>
                <label>this.state.weight</label>
                <label>this.state.height</label>
                <label>this.state.age</label>
                <label>this.state.caloriesBurned</label>
                <label>this.state.BMI</label>
                <button onClick={this.BMICal}>Find Out Your BMI</button>
                
                <Router>
                    <Switch>
                        <Route path="">Exercise</Route>
                        <Route path="">Nurtition</Route>
                    </Switch>
                </Router>

                <UpdateProfile
                    email={this.state.email}
                />
                {/*show as cards*/}
                {/*import BMI Component}*/}
                {/*import Exericse Component*/}
                {/*import Nutrition Component*/}
                {/*import Stats Component???}*/}

                {/*import Exericse Component*/}
                {/*import Nutrition Component*/}
                
                {/*import Logout Component}*/}
                
            </div>
        )
    }
}
export default Userpage;