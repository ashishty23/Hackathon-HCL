import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate, Link } from 'react-router-dom'
import {
  ShoppingCart,
  User,
  LogOut,
  Shield,
  ChevronRight,
  Sparkles,
} from 'lucide-react'
import Logo from './assets/Retail.png'
import LogoutConfirmationModal from './components/LogoutConfirmationModal'

const Navbar = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const user = JSON.parse(localStorage.getItem('user')) || {}

  const [scrolled, setScrolled] = useState(false)
  const [showLogoutModal, setShowLogoutModal] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setShowLogoutModal(false)
    navigate('/login')
  }

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-xl shadow-cyan-500/10'
          : 'bg-white/70 backdrop-blur-md'
      }`}
    >
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-400" />

      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between text-sm">
        {/* Logo */}
        <img
          src={Logo}
          alt="Logo"
          className="w-28 cursor-pointer hover:scale-105 transition-transform"
          onClick={() => navigate('/')}
        />

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-10 font-semibold">
          {['/', '/menu', '/about', '/cart'].map((path, i) => {
            const labels = ['HOME', 'MENU', 'ABOUT', 'CART']
            return (
              <li key={path} className="relative group">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `transition-colors ${
                      isActive ? 'text-cyan-600' : 'text-gray-700'
                    }`
                  }
                >
                  {labels[i]}
                </NavLink>
                <span className="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-cyan-500 transition-all duration-300 group-hover:w-3/5 group-hover:left-1/5" />
              </li>
            )
          })}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Welcome */}
          {token && (
            <div className="hidden md:flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-400 rounded-full blur-sm opacity-40 group-hover:opacity-70" />
                <div className="relative bg-gradient-to-br from-teal-100 to-cyan-100 p-2 rounded-full">
                  <User className="w-4 h-4 text-cyan-700" />
                </div>
              </div>
              <span className="text-gray-700">
                Hey, <span className="font-bold text-cyan-700">{user?.name}</span>
              </span>
              <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
            </div>
          )}

          {/* Admin Button */}
          {user?.role === 'ADMIN' && (
            <Link
              to="/admin"
              className="group relative px-4 py-2 rounded-xl overflow-hidden hover:scale-105 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-rose-400" />
              <span className="relative flex items-center gap-1 text-white font-bold">
                <Shield className="w-4 h-4" />
                Admin
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          )}

          {/* Cart */}
          {/* <Link
            to="/cart"
            className="group relative hover:scale-110 transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl blur-md opacity-50 group-hover:opacity-80" />
            <div className="relative bg-gradient-to-br from-emerald-500 to-teal-500 px-4 py-2 rounded-xl flex items-center gap-2">
              <ShoppingCart className="w-4 h-4 text-white group-hover:animate-bounce" />
              <span className="text-white font-bold">Cart</span>
            </div>
          </Link> */}

          {/* Auth Buttons */}
          {!token ? (
            <button
              onClick={() => navigate('/login')}
              className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
            >
              Create Account
            </button>
          ) : (
            <button
              onClick={() => setShowLogoutModal(true)}
              className="group relative px-5 py-2 rounded-xl overflow-hidden hover:scale-105 transition-transform"
            >
              <div className="absolute inset-0 bg-red-600" />
<span className="relative flex items-center gap-2 text-white font-semibold">
  <LogOut className="w-4 h-4" />
  Logout
</span>

            </button>
          )}
        </div>
      </div>

      <LogoutConfirmationModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />
    </nav>
  )
}

export default Navbar
