import React, { useContext } from 'react'
import { plans,assets } from '../../moreassets/assets'
import { AppContext } from '../../context/AppContext'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const BuyCredit = () => {

  const {user, backendUrl, loadCreditsData, token, setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()

  const initPay = async(order) => {
     const options = {
      key:import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency:order.currency,
      name:'Credits Payment',
      description:'Credits Payment',
      order_id:order.id,
      receipt: order.receipt,
      handler: async(response) => {
         try {
           
          const {data} = await axios.post(backendUrl + '/api/user/verify-razor', response,
            {headers: {token}}
          )
          if (data.success) {
            loadCreditsData();
            navigate('/')
            toast.success('credit Added')
          }

         } catch (error) {
           toast.error(error.message)
         }
      }
     }
     const rzp = new window.Razorpay(options)
     rzp.open()
  }

  const paymentRazorpay = async(planId) =>{
    try {
      if (!user) {
        setShowLogin(true)
      }
      const {data} =await axios.post(backendUrl + '/api/user/pay-razor', {planId}, {headers:{token}})
      
      if (data.success) {
         initPay(data.order)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <motion.div
    
    initial={{opacity:0.2, x:100}}
    transition ={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
    
    className='min-h-[90vh] text-center pt-14 mb-10'>
      <button className='text-black border border-gray-400 px-10 py-2 rounded-full mb-6 bg-blue-400'>Our Plans</button>
      <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10 sm:text-4xl'>Choose Your Plan</h1>

      <div className='flex flex-wrap justify-center gap-4 min-h-[40vh] items-center'>
        {
          plans.map((item,index) => (
            <div key={index} className='flex flex-col drop-shadow-sm border
             bg-blue-100 justify-center items-center rounded-lg min-w-[23vw]  py-12 px-8 text-gray-800 hover:scale-105
             transition-all duration-500'>
              <img  src={assets.logo_icon} width={40} alt="" />
              <h1 className='mt-3 mb-1 font-semibold'>{item.id}</h1>
              <p className='text-sm'>{item.desc}</p>
              <p className='mt-6'> <span className='text-3xl font-medium'>${item.price} </span>/ {item.credits}</p>
              <button onClick={() => paymentRazorpay(item.id)} className='w-full bg-blue-400 text-white mt-8
               text-md rounded-md py-2 min-w-52'>{user? 'Purchase':'Get Started'}</button>
            </div>
          ))
        }
      </div>

    </motion.div>
  )
}

export default BuyCredit