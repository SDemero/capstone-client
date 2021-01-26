import logo from './logo.svg';
import './App.css';
import Home from './Components/Home.jsx'
import BMI from './Components/BMI'
import './Components/Home.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
     <BMI/>
    </div>
    </Router>
  );
}

export default App;
