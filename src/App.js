import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Service from './Components/Service'
import About from './Components/About'
import Project from './Components/Project'
import Workes from './Components/Workes'
import Blog from './Components/Blog'
import AllServices from './Components/Service/AllServices'
import AppDesign from './Components/Service/AppDesign'
import WebDesign from './Components/Service/WebDesign'
import AdminPnl from './Components/Service/AdminPnl'
import IsoDesign from './Components/Service/IsoDesign'


import Error from './Components/Error'


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
            <Route path='*' element={<Error />} />
            <Route path='/' element={<Home />}>
              <Route index element={<AllServices />} />
              <Route path='Service/AllServices' element={<AllServices />} />
              <Route path='Service/AppDesign' element={<AppDesign />} />
              <Route path='Service/WebDesign' element={<WebDesign />} />
              <Route path='Service/AdminPnl' element={<AdminPnl />} />
              <Route path='Service/IsoDesign' element={<IsoDesign />} />
            </Route>
            <Route path='/Service' element={<Service />}>
            <Route index element={<AllServices />} />
              <Route path='Service/AllServices' element={<AllServices />} />
              <Route path='Service/AppDesign' element={<AppDesign />} />
              <Route path='Service/WebDesign' element={<WebDesign />} />
              <Route path='Service/AdminPnl' element={<AdminPnl />} />
              <Route path='Service/IsoDesign' element={<IsoDesign />} />
            </Route>
            <Route path='/About' element={<About />} />
            <Route path='/Project' element={<Project />} />
            <Route path='/Workes' element={<Workes />} />
            <Route path='/Blog' element={<Blog />} >
              <Route path='Service/AllServices' element={<AllServices />} />
              <Route path='Service/AdminPnl' element={<AdminPnl />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;



