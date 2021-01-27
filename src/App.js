import './css/App.css';
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
import Blog from './Components/Blog'
import Media from './Components/Blog'
import Contact from './Components/Contact'

function App() {

  const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@cortezd334"
 
  const [profile, setProfile] = useState({
    name: 'Danira Cortez',
    profileImage: '',
    profileUrl: ''
  })

  const [blog, setBlog] = useState({
    item: [],
    isLoading: true,
    error: null
  })
  
  const axios = require('axios').default
  
  useEffect(() => {
    axios.get(mediumURL)
    .then(info => {
      console.log(info)
      const image = info.data.feed.image;
      const link = info.data.feed.link;
      const blogs = info.data.items;
      const posts = blogs.filter(post => post.categories.length > 0)
      
      setProfile(p => ({...p, profileUrl: link, profileImage: image}))
      setBlog({item: posts, isLoading: false})
    })
    .catch(err => setBlog({error: err.message}))
  }, [axios])
  
  // wrote a fetch option for blog post
  // useEffect(() => {
  //   fetch(mediumURL)
  //   .then(res => res.json())
  //   .then(info => {
  //     const image = info.feed.image;
  //     const link = info.feed.link;
  //     const blogs = info.items;
  //     const posts = blogs.filter(post => post.categories.length > 0)

  //     setProfile(p => ({...p, profileUrl: link, profileImage: image}))
  //     setBlog({item: posts, isLoading: false})
  //   })
  //   .catch(err => setBlog({error: err.message}))
  // }, [])

  return (
    <>
    <Router>
      <div id='nav'>
        <NavLink to='/' exact className='inline-block'><img src={process.env.PUBLIC_URL + '/test.png'} alt='home' height='50' width='auto'/></NavLink>
        <h1 className='inline-block marg'>Danira Cortez</h1>
        <NavLink to='/contact' className='tabs'>Contact</NavLink>
        <NavLink to='/media' className='tabs'>Media</NavLink>
        <NavLink to='/blog' className='tabs'>Blog</NavLink>
        <NavLink to='/resume' className='tabs'>Resume</NavLink>
        <NavLink to='/projects' className='tabs'>Projects</NavLink>
        <NavLink to='/about' className='tabs'>About</NavLink>
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
        <Route exact path='/media'>
          <Media/>
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
