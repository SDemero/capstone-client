import React, {Component} from "react";
import {Card, Form, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import BMIRange from './BMIRange';
import './BMI.css'


class BMI extends Component{
    constructor(props){
        super(props)

        this.state = {
            height: 0,
            weight: 0,
            userBMI: 0,
            flag: false,
           }
    }


    handleSubmit=(event)=>{
        event.preventDefault();
        if (this.state.flag === false){
        let result = (this.state.weight / this.state.height / this.state.height) * 703;
        this.setState({userBMI: result, flag: true});
        }
    }
    
    
    handleChange = (event) => {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value})
    }

    handleReset = () => {
        this.setState({flag: false})
    }
  

    render(){
        
        return(
            <div>
            <div className="BMI" >
                <Card bg={'info'} border={"primary"}  text={'white'}>
                    <Card.Header><Card.Title> Find Your BMI </Card.Title></Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label> Height (in) </Form.Label>
                                <Form.Control type="number"  value={this.state.height} name="height" onChange={this.handleChange} placeholder="0" min="0"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label> Weight (lbs) </Form.Label>
                                <Form.Control type="number" value={this.state.weight} name="weight" onChange={this.handleChange} placeholder="0" min="0" step=".01"/>
                            </Form.Group>
                            <center><Button variant="secondary" onClick={this.handleSubmit} type="submit"> Calculate </Button></center>
                            {this.state.flag ?
                            <div><br/>
                                <center><Form.Label>BMI: {this.state.userBMI.toFixed(1)}</Form.Label></center><br/>
                                <center><Button variant="secondary" onClick={this.handleReset} type="submit"> Reset </Button></center>
                            </div>
                            : null}
                           
                        </Form>
                            
                    </Card.Body>
                </Card>
            </div>
                <div>
                                <br/>
                                {this.state.flag ?
                                    <div>
                                    
                                        {isNaN(this.state.userBMI) ? null:
                                            <BMIRange 
                                                userBMI ={this.state.userBMI}
                                            /> 
                                        }
                                    </div>  
                               : null}
                            </div>
            </div>
        );
    }

}

export default BMI;