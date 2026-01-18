import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Menu from './pages/Menu'
import Cart from './pages/Cart'

import About from './About'
import MyProfile from './MyProfile'
import Home from './Home'
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import Footer from './Footer'
import Login from './pages/Login'
import Signup from './pages/Signup'
import VerifyOpt from './pages/VerifyOpt'
import YourOrders from './pages/YourOrders'
import AdminAllOrders from './pages/AdminAllOrders'
import AdminDashboard from './pages/AdminDashboard'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path="/menu"
          element={
            <PrivateRoute>
              <Menu />
            </PrivateRoute>
          }
        />
        <Route path='/cart' element={ <PrivateRoute><Cart /> </PrivateRoute> } />
        <Route path='/your-orders' element={ <PrivateRoute><YourOrders /> </PrivateRoute> } />
        <Route path='/admin/orders' element={ <PrivateRoute><AdminAllOrders /> </PrivateRoute> } />
        <Route path='/admin' element={ <PrivateRoute><AdminDashboard /> </PrivateRoute> } />
        
        
        <Route path='/login' element= {<PublicRoute> <Login /></PublicRoute> } />
        <Route path='/about' element={<About />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/signup' element= {<PublicRoute> <Signup /></PublicRoute>}/>
        <Route
          path="/verify"
          element={
            <PublicRoute>
              < VerifyOpt/>
            </PublicRoute>
          }
        />
      </Routes>
      <Footer />

    </div>
  )
}

export default App