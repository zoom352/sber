import logo from './logo.svg';
import './App.css';
import Highest from './components/highest/highest';
import Partners from './components/partners/partners';
import CardSwitch from './components/CardSwitch/CardSwitch';
import Offer from './components/offer/offer';
import CardSalary from './components/cardSalary/cardSalary';
import Footter from './components/footter/footter';
import Salarry from './components/Salarry/Salarry';
import { Redirect, Route } from "react-router-dom";

function App() {
  
  
  return (
    <div className="App">
      <div className='contentwrap'>
      <Highest/>
      <Route path='/'
                        render={() => <Partners/>} />

      <Route path='/Salarry'
                        render={() => <Salarry/>} />


      
      {/* <CardSwitch/>
      <Offer/>
      <CardSalary/> */}


      
      <Footter/>
      </div>
    </div>
  );
}

export default App;
