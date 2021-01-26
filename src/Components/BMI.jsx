import React, { Component } from "react";
import './Home.css'
import {Link} from 'react-router-dom';

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
    this.setState({[nam]: val});
    console.log(this.state)
}
handleChange=(event)=>{
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
    console.log(this.state)
}
}

export default BMI;