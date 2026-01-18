import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Menu from './Menu'
import Cart from './Cart'
import Login from './Login'
import About from './About'
import MyProfile from './MyProfile'
import Home from './Home'
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
       <Route
  path="/menu"
  element={
    <PrivateRoute>
      <Menu />
    </PrivateRoute>
  }
/>
        <Route path='/Cart' element = {<Cart/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/my-profile' element = {<MyProfile/>} />
      </Routes>
      
    </div>
  )
}

export default App