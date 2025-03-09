import React, { useContext } from 'react'
import { assets } from '../../moreassets/assets'
import {motion} from 'framer-motion'
import { AppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'


const GenerateButton = () => {



  const {user, setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()
 const onClickHandler = () =>{
   if (user) {
    navigate('/result')
   }
   else{
    setShowLogin(true)
   }
}


  return (
    <motion.div
    
    initial={{opacity:0.2, x:100}}
    transition ={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
    
    className='pb-16 text-center'>
        <h1 className='text-2xl md:text-4xl lg:text-5xl mt-4 font-semibold text-gray-800 py-6 md:py-16'>Generate Image Here</h1>
        
        <button onClick={onClickHandler}  className='inline-flex items-center gap-2 px-12 py-3 rounded-full
        bg-yellow-600 text-white m-auto hover:scale-105 transition-all
        duration-500' >Generate now
            <img src={assets.star_group} alt="" className='h-6' />
        </button>
        
        
    </motion.div>
  )
}

export default GenerateButton