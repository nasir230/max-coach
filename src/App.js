import logo from './logo.svg';
import './App.css';
import Hero from './Hero';
import Header from './Header';
import Contact from './Contact';
import {Route,Switch} from 'react-router-dom';
const App=()=> {
  return (
    <>

   <Header/>
   <Switch>
   <Route exact path="/" component={Hero}/>
   <Route exact path="/contact" component={Contact}/>
   </Switch>
    </>
  );
}

export default App;
