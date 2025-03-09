import React from 'react'
import Header from '../components/Header/Header'
import Steps from '../components/Steps/Steps'
import Description from '../components/Description/Description'
import Testimonials from '../components/Testimonials/Testimonials'
import GenerateButton from '../components/GenerateButton/GenerateButton'


const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <Description />
      <Testimonials />
      {/* <GenerateButton /> */}
     
    </div>
  )
}

export default Home