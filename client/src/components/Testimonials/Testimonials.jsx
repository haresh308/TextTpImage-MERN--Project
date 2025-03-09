import React from 'react'
import { assets, testimonialsData } from '../../moreassets/assets'
import {motion} from 'framer-motion'


const Testimonials = () => {
  return (
    <motion.div
    
    initial={{opacity:0.2, x:100}}
    transition ={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
    className='flex flex-col justify-center items-center my-20 py-6 '>
        <h1 className='text-4xl sm:text-5xl font-semibold mb-2'>Testimonials</h1>
        <p className='text-gray-500 mb-12'>Look at our Users Testimonials</p>
      <div className='flex flex-wrap gap-6'>
        {testimonialsData.map((item,index) =>(
            <div key={index}
             className='bg-white/20 p-12 rounded-lg shadow-md border w-80 m-auto
              cursor-pointer hover:scale-[1.02] transition-all'>
                <div className='flex-flex-col items-center'>
                    <img src={item.image} alt="" className='rounded-full w-14' />
                    <h2 className='text-xl font-semibold mt-3'>{item.name}</h2>
                    <p className='text-gray-500 mb-4'>{item.role}</p>
                    <div className='flex mb-4'>
                      {Array(item.stars).fill().map((item,index) => (
                        <img src={assets.rating_star} key={index} alt="" />
                      ))}

                    </div>
                    <p className='text-center text-sm text-gray-600'>{item.text}</p>
                </div>
            </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonials