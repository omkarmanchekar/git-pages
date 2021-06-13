
import './App.css';
import Home from './Home'
import AboutUs from './AboutUs'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

function App() {
  return (
    <Router basename="/git-pages">
      <div className="App">
        <Switch>
          <Route exact path="/" render={()=> <Home />}/>
          <Route exact path="/about" render={()=>   <AboutUs />}/>
         
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
