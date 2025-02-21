import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Addpost from './pages/Addpost'
import Viewpost from './pages/Viewpost'
import Editpost from './pages/Editpost'
import Register from './pages/Register'
import Login from './pages/Login'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>

      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/addpost" element={<Addpost/>}/>
          <Route path="/viewpost" element={<Viewpost/>}/>
          <Route path="/editpost" element={<Editpost/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
