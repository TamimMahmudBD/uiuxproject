import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Service from './Components/Service'
import About from './Components/About'
import Project from './Components/Project'
import Workes from './Components/Workes'
import Blog from './Components/Blog'

import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Routes>
          
            <Route path='/' element={<Home/>}/>
            <Route path='/Service' element={<Service/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Project' element={<Project/>}/>
            <Route path='/Workes' element={<Workes/>}/>
            <Route path='/Blog' element={<Blog/>}/>
          </Routes>
        </div>
        <Footer />
        </Router>
    </div>
  );
}

export default App;



