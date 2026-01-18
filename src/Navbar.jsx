import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Logo from './assets/Retail.png'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className="border-b border-gray-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 text-sm">
        
        {/* Logo */}
        <img
          src={Logo}
          alt="Logo"
          className="w-28 cursor-pointer"
          onClick={() => navigate('/')}
        />

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          {['/', '/menu', '/about', '/cart'].map((path, i) => {
            const labels = ['HOME', 'MENU', 'ABOUT', 'CART']
            return (
              <li key={path} className="relative">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `py-1 transition-colors ${
                      isActive ? 'text-primary' : 'text-gray-700'
                    }`
                  }
                >
                  {labels[i]}
                </NavLink>

                {/* underline */}
                <span className="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-3/5 group-hover:left-1/5" />
              </li>
            )
          })}
        </ul>

        {/* Right section */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/login')}
            className="hidden md:block bg-primary text-white px-6 py-2.5 rounded-full font-light"
          >
            Create Account
          </button>

          {/* Mobile menu placeholder */}
          <div className="w-6 h-6 md:hidden" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
