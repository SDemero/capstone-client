import React, {Component} from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
=======
import "./App.css"
import {Carousel, Container} from 'react-bootstrap';
import NavBar from "./NavBar"


>>>>>>> 513865505d281a60bf4b28cead4c6a398cda9de2

class Home extends Component{
   constructor(props){
       super(props)
   }
   

  render(){
      return(
<<<<<<< HEAD
      <div>
          <div class='card'>
          <div className='dashboard'>
              {/* <div className='signup'><Link to="/signup" style={{textDecoration:'none',color:'black'}}>SIGN UP</Link></div>
              <div className='login'><Link to="/login" style={{textDecoration:'none',color:'black'}}>LOGIN</Link></div> */}
          <ul>
              <li>
                  Sign Up
              </li>
              <li>
                  Log in
              </li>
          </ul>
          </div>
          <div class='media-left'><img class='img-responsive'src='data:image/jpeg;base64,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' alt=''/></div>
          <div class='media-left'><img class='img-responsive'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUohzlook5ZKmhXHcDpM-535-Po2suNmufPA&usqp=CAU' alt=''/></div>
          </div>
      </div>
=======
      <div className = "container-fluid">
          <NavBar/>
          <div>

          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./img/excersise.jpeg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Welcome to Invested Fitness</h3>
      <p>Your place to invest your time into your own body</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./img/img2.jpeg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Excersise</h3>
      <p>Our Goal is to help make sure you know when and how to excersice to maximise your gain</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./img/nutrition.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Nutrition</h3>
      <p>Your body is only as strong as what you feed it. A good diet can do a lot for your body and make it stronger</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          </div>
         </div>
        
        
         
>>>>>>> 513865505d281a60bf4b28cead4c6a398cda9de2
      );
  }
}

export default Home;