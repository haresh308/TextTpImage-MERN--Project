import React from 'react'
import { assets } from '../../moreassets/assets'
import {motion} from 'framer-motion'
const Description = () => {
  return (
    <motion.div
    
    initial={{opacity:0.2, x:100}}
    transition ={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
    
    className='flex flex-col justify-center items-center my-24 p-6 md:px-28'>
        <h1 className='text-4xl sm:text-5xl font-semibold mb-2'>Create your Images</h1>
        <p className='text-gray-500 mb-8'> Turn your Words into Images</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <img src= {assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg' />
            <div>
                <h2  className='text-3xl font-medium max-w-lg mb-4'>Introducimg Ai tool to convert Text into Image </h2>
                <p className='text-gray-600 mb-4'>Turn your imagination into reality with just a few words.
                     Our AI-driven tool crafts unique and stunning images based on your descriptions.
                      From abstract art to lifelike scenes,
                     let your creativity flow without limits—because every word deserves a masterpiece."</p>
                <p className='text-gray-600'>Start by entering a detailed description of what you want to see. Choose your preferred style,
                     mood, or resolution to customize the result. Then, click ‘Generate,’
                      and watch as our AI brings your vision to life in seconds.
                     It’s that easy—imagine it, describe it, and let us create it for you</p>     
            </div>
        </div>
    </motion.div>
  )
}

export default Description