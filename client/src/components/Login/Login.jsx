import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../moreassets/assets'
import { AppContext } from '../../context/AppContext'
import {motion} from 'framer-motion'
import axios from 'axios'
import { toast } from 'react-toastify'
const Login = () => {

 const [state,setState] = useState('Login')
const {setShowLogin, backendUrl, setToken,setUser} = useContext(AppContext)

const[name,setName] = useState('')
const[email,setEmail] = useState('')
const[password,setPassword] = useState('')

const onSubmitHandler = async (e) => {
  e.preventDefault()

  try {
    if (state === 'Login') {

      const {data} =await axios.post(backendUrl + '/api/user/login', {
        email,password
      })

      if (data.success) {
        setToken(data.token)
        setUser(data.user)
        localStorage.setItem('token', data.token)
        setShowLogin(false)
      }else{
        toast.error(data.message)
      }

    }else{
      const {data} =await axios.post(backendUrl + '/api/user/register', {
        name,email,password
      })

      if (data.success) {
        setToken(data.token)
        setUser(data.user)
        localStorage.setItem('token', data.token)
        setShowLogin(false)
      }else{
        toast.error(data.message)
      }
    }
  } catch (error) {
     toast.error(error.message)
  }
}

 useEffect(() =>{
  document.body.style.overflow = 'hidden';
  
  return () => {
    document.body.style.overflow = 'unset';
  }

 },[])



  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm
     bg-black/30 flex justify-center items-center'>
      <motion.form 
      
      initial={{opacity:0.2, right:100}}
    transition ={{duration:0.3}}
    whileInView={{opacity:1,right:0}}
    viewport={{once:true}}
      
      className='relative bg-white p-12 rounded-xl text-slate-500 ' onSubmit={onSubmitHandler}>
         <h1 className='text-center text-2xl text-nuetral-700
         font-medium'>{state}</h1>
         <p className='text-sm font-bold'>Welcome! Sign in to Continue</p>
         {state !== 'Login' &&
         <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
         <img src={assets.user_icon} className='h-4' width={20} alt="" />
         <input onChange={e => setName(e.target.value)} 
         value={name} type="text" className='outline-none text-sm' placeholder='Full Name' requiured/>
      </div>
         }
         


         <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-3'>
            <img src={assets.email_icon}  className='h-4' width={20} alt="" />
            <input type="email"  onChange={e => setEmail(e.target.value)} 
         value={email} className='outline-none text-sm' placeholder='Email id' requiured/>
         </div>
         <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-3'>
            <img src={assets.lock_icon} className='h-4' width={20} alt="" />
            <input type="password"  onChange={e => setPassword(e.target.value)} 
         value={password} className='outline-none text-sm' placeholder='Password' requiured/>
         </div>
         <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot password</p>


         <button className='bg-blue-600 w-full text-white py-2
          rounded-full'>{state === 'Login'?"Login":'Create Account' }</button>


        {state==='Login'? <p className='mt-5 text-center'>Don't have an account?
         <span className='text-blue-600 cursor-pointer' onClick={() => setState('Sign Up')} >Sign up</span></p>:

         <p className='mt-5 text-center'>Already Have an Account?
             <span className='text-blue-600 cursor-pointer' onClick={() => setState('Login')}>Login</span></p>}
             
        <img onClick={() =>setShowLogin(false)} src={assets.cross_icon} className='absolute top-5 right-5 cursor-pointer ' alt="" />
      </motion.form>
    </div>
  )
}

export default Login