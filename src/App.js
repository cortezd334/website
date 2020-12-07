import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
import Blog from './Components/Blog'
import Contact from './Components/Contact'

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/projects'>
          <Projects/>
        </Route>
        <Route path='/resume'>
          <Resume/>
        </Route>
        <Route path='/blog'>
          <Blog/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
