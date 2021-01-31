import React, {Component} from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import {Carousel, Container} from 'react-bootstrap';
import NavBar from "./NavBar"



class Home extends Component{   

  render(){
      return(
      <div className = "container-fluid">
          <NavBar/>
          <div>

          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./img/excersise.jpeg"
      alt="First slide"
      height= "854"
      />
    <Carousel.Caption>
      <h1>Welcome to Invested Fitness</h1>
      <p>Your place to invest your time into your own body</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./img/img2.jpeg"
      alt="Second slide"
      height= "854"
    />

    <Carousel.Caption>
      <h1>Excersise</h1>
      <p>Our Goal is to help make sure you know when and how to excersice to maximise your gain</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./img/nutrition.jpg"
      alt="Third slide"
      height= "854"
    />

    <Carousel.Caption>
      <h1>Nutrition</h1>
      <p>Your body is only as strong as what you feed it. A good diet can do a lot for your body and make it stronger</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          </div>
         </div>
        
        
         
      );
  }
}

export default Home;