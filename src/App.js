import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import circle from './images/circle.png'

function App() {
  return (
    <>
    <Router>
      <div id='nav'>
        <NavLink to='/' exact><img src={circle} alt='home' height='50' width='auto'/></NavLink>
        <NavLink to='/about'>About Me</NavLink>
        <NavLink to='/projects' exact>Projects</NavLink>
        <NavLink to='/resume' exact>Resume</NavLink>
        <NavLink to='/blog' exact>Blog</NavLink>
        <NavLink to='/contact' exact>Contact</NavLink>
      </div>
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
    </>
  );
}

export default App;
