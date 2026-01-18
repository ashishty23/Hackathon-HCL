import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {assets} from './assets/assets'


const Navbar = () => {
     const navigate = useNavigate();
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        {/* <img onClick={()=> navigate('/')} className='w-44 cursor-pointer' src = ""></img> */}
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to = '/'>
                <li className='py-1'>HOME</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to = '/menu'>
                <li className='py-1'>Menu</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to= '/about'>
                <li className='py-1'>ABOUT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to = '/cart'>
                <li className='py-1'>Cart</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            {/* <button className='border px-4 py-1 rounded-full border-gray-300 text-gray-800 text-sm' onClick={() => window.open("", "_blank")}>
                Admin Panel
            </button> */}
        </ul>
        <div className='flex items-center gap-4'>
            {
                // token && userData
                // ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                //     <img className='w-8 rounded-full'  src= "user-First-Letter" alt=""/>
                //     {/* <img className='w-2.5' src={assets.dropdown_icon} alt= "" /> */}
                //     {/* <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                //         <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                //             <p onClick={()=> navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                //             <p onClick={()=> navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                //             <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
                //         </div>
                //     </div> */}

                // </div>
                 <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>
                Create Account
                </button>

            }
            <img className='w-6 md:hidden' src={assets.menu} alt="" />
            {/* ------Mobile Menu---------
            <div  className={`${showMenu ? 'fixed w-full' : 'h-0 w-0' } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                <div className='flex items-center justify-between px-5 py-6 '>
                    <img className='w-36' src={assets.logo} alt="" />
                    <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium '>
                    <NavLink onClick={() => setShowMenu(false)} to='/'><p className= 'px-4 py-2 rounded inline-block'>HOME</p></NavLink>
                    <NavLink onClick={() => setShowMenu(false)} to='/menu'><p className= 'px-4 py-2 rounded inline-block'>MENU</p></NavLink>
                    <NavLink onClick={() => setShowMenu(false)} to='/about'><p className= 'px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
                    <NavLink onClick={() => setShowMenu(false)} to='/cart'><p className= 'px-4 py-2 rounded inline-block'>CART</p></NavLink>
                </ul>
            </div> */}
            
        </div>
    </div>
  )
}

export default Navbar