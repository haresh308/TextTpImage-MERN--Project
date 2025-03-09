import React, { useContext } from 'react'
import {assets} from '../../moreassets/assets'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { AppContext } from '../../context/AppContext'

const Navbar = () => {

const {user,setShowLogin, logout, credit} = useContext(AppContext)
const  navigate = useNavigate()

  return (
    <div className='flex item-center justify-between py-4 sticky top-1' id='nav-bar' >
      
      <img onClick={() => navigate("/")} src={assets.logo} className='w-28 sm:w-28 lg:w-44 ' alt="" />
      

      <div>
        {user ?<div className='flex items-center gap-2 sm:gap3'>
          <button onClick={() => navigate('/buycredits')} className='flex items-center gap-2 bg-green-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full 
          hover:scale-105 transition-all duration-700'>
          <img className='w-5' src={assets.credit_star} alt="" />
          <p className='text-xs sm:text-sm font-medium text-gray-600'>credits left:{credit}</p>
          </button>
          <p className='text-gray-600 max-sm:hidden pl-4'>Hi, {user.name}</p>
          <div className='relative group'>
            <img src={assets.profile_icon} className='w-10 drop-shadow' alt="" />
            <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                  <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                    <li onClick={logout} className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                  </ul>
            </div>
          </div>
          </div>:
        <div className='flex items-center gap-2 sm:gap-5'>
          <p onClick={() => navigate('/buycredits')} className='cursor-pointer'>Pricing</p>
          <button onClick={() => setShowLogin(true)} className='bg-green-900 text-white px-7 py-2 sm:px-10 text-sm rounded-full'>Login</button>
          </div>}
      </div>
    </div>
  )
}

export default Navbar