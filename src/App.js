import './css/App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
// import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
//HashRouter instead of BrowserRouter?
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
import Blog from './Components/Blog'
import Contact from './Components/Contact'

// import Construction from './Components/Construction'
// import linkedin from './images/linkedin.png';
// import github from './images/github.png';
// import medium from './images/medium.png';
// import paper_plane from './images/paper_plane.png';

function App() {
  
  const axios = require('axios').default
  const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@cortezd334"

  const [profile, setProfile] = useState({
    title: '',
    name: '',
    avtar: '',
    profileurl: ''
  })

  const [blog, setBlog] = useState({
    item: [],
    isLoading: true,
    error: null
  })

  useEffect(() => {
    axios.get(mediumURL)
    .then(info => {
      console.log(info)
      const title = info.data.feed.title;
      const avatar = info.data.feed.image;
      const profileLink = info.data.feed.link;
      const res = info.data.items;

      setProfile({...profile, title: title, profileurl: profileLink, avtar: avatar})
      setBlog({item: res, isLoading: false})
    })
  }, [axios])
  
  return (
    // <>
    // {/* comment this section in when updating Under Construction
    // also have to comment in construction.css in index.css */}
    // <Router>
    //   <div id='nav'>
    //     <NavLink to='/' exact className='inline-block'><img src={process.env.PUBLIC_URL + '/final.png'} alt='home' height='50' width='auto'/></NavLink>
    //     <h1 className='inline-block marg'>Danira Cortez</h1>
    //     <div className='icons'>
    //         <a href='https://www.linkedin.com/in/daniracortez/' classname='icon' rel="noreferrer" target='_blank'><img src={linkedin} alt='Linkedin'/></a>
    //         <a href='https://github.com/cortezd334' classname='icon' rel="noreferrer" target='_blank'><img src={github} alt='Github'/></a>
    //         <a href='https://medium.com/@cortezd334' classname='icon' rel="noreferrer" target='_blank'><img src={medium} alt='Medium'/></a>
    //         <a href={'mailto:cortezd334@gmail.com'} classname='icon'><img src={paper_plane} alt='Email'/></a>
    //     </div>
    //   </div>
    //   <Switch>
    //     <Route exact path='/'>
    //       <Construction/>
    //     </Route>
    //   </Switch>
    // </Router>
    // </>


    <>
    <Router>
    {/* <Router basename={process.env.PUBLIC_URL}> if not using HashRouter */}
      <div id='nav'>
        <NavLink to='/' exact className='inline-block'><img src={process.env.PUBLIC_URL + '/final.png'} alt='home' height='50' width='auto'/></NavLink>
        <h1 className='inline-block marg'>Danira Cortez</h1>
        <NavLink to='/contact' className='tabs'>Contact</NavLink>
        <NavLink to='/blog' className='tabs'>Blog</NavLink>
        <NavLink to='/resume' className='tabs'>Resume</NavLink>
        <NavLink to='/projects' className='tabs'>Projects</NavLink>
        <NavLink to='/about' className='tabs'>About Me</NavLink>
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
          <Blog blog={blog} profile={profile}/>
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
