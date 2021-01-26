import React, { Component } from "react";
import './Home.css'
import {Link} from 'react-router-dom';
import axios from 'axios';

class BMI extends Component{
    constructor(props){
        super(props)
        this.state={
            user:this.props.user,
            password: this.props.password,
            height: this.props.height,
            weight: this.props.weight,
            age: this.props.age,
            gender: this.props.gender
        }
    }


    render(){
        return(
        <div>
            <div className='form'>
                <form onSubmit={this.handleSubmit}>
                    <label for='height'>Height:</label>
                    <input type='text' id='height' name='height' value={this.state.height} onChange={this.handleChange}/><br></br>
                    <label for='weight'>Weight:</label>
                    <input type='text' id='weight' name='weight' value={this.state.weight} onChange={this.handleChange}/><br></br>
                    <label for='age'>Age:</label>
                    <input type='text' id='age' name='age' value={this.state.age} onChange={this.handleChange}/><br></br>
                    <div className='gen'>
                    <input type="radio" id="male" name="gender" value="male" onChange={this.handleChange}/>
                    <label for="male">Male</label><br/>
                    <input type="radio" id="female" name="gender" value="female" onChange={this.handleChange}/>
                    <label for="female">Female</label><br></br>
                    </div>
                    <input type='submit' class='Button' value='Submit' />
                </form>
            </div>
        </div>
        );
    }
handleSubmit=(event)=>{
    event.preventDefault();
    let nam = event.target.name;
    let val = event.target.value;
    let bmi = this.state.height
    this.setState({[nam]: val});
    this.backend();
    console.log(this.state)
}
handleChange=(event)=>{
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
    console.log(this.state)
}
async backend(){
    let bmi = (this.state.weight/(this.state.height*this.state.height))
    console.log("this is the weight "+this.state.weight
        +"\n this is the height "+this.state.height+"bmi "+bmi);
    
    await axios.put('http://localhost:8080/api/user/1',{
        BMI: bmi
    })
}
}

export default BMI;