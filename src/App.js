import './css/App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Construction from './Components/Construction'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
import Blog from './Components/Blog'
import Contact from './Components/Contact'

function App() {
  return (
    <>
    {/* comment this section in when updating Under Construction
    also have to comment in construction.css in index.css */}
    <Router>
      <div id='nav'>
        <NavLink to='/' exact className='inline-block'><img src={process.env.PUBLIC_URL + '/final.png'} alt='home' height='50' width='auto'/></NavLink>
        <h1 className='inline-block marg'>Danira Cortez</h1>
      </div>
      <Switch>
        <Route exact path='/'>
          <Construction/>
        </Route>
      </Switch>
    </Router>
    </>


    // <>
    // <Router>
    //   <div id='nav'>
    //     <NavLink to='/' exact className='inline-block'><img src={process.env.PUBLIC_URL + '/final.png'} alt='home' height='50' width='auto'/></NavLink>
    //     <h1 className='inline-block marg'>Danira Cortez</h1>
    //     <NavLink to='/about'>About Me</NavLink>
    //     <NavLink to='/projects' exact>Projects</NavLink>
    //     <NavLink to='/resume' exact>Resume</NavLink>
    //     <NavLink to='/blog' exact>Blog</NavLink>
    //     <NavLink to='/contact' exact>Contact</NavLink>
    //   </div>
    //   <Switch>
    //     <Route exact path='/'>
    //       <Home/>
    //     </Route>
    //     <Route path='/about'>
    //       <About/>
    //     </Route>
    //     <Route path='/projects'>
    //       <Projects/>
    //     </Route>
    //     <Route path='/resume'>
    //       <Resume/>
    //     </Route>
    //     <Route path='/blog'>
    //       <Blog/>
    //     </Route>
    //     <Route path='/contact'>
    //       <Contact/>
    //     </Route>
    //   </Switch>
    // </Router>
    // </>
  );
}

export default App;
