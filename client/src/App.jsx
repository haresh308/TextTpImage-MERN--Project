import React, { useContext } from 'react'
import { Routes,Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home'


import BuyCredit from './pages/BuyCredit/BuyCredit'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer/Footer'
import Result from './pages/Result/Result'
import Login from './components/Login/Login'
import { AppContext } from './context/AppContext'
import './App.css'


const App = () => {
  const {showLogin} = useContext(AppContext)
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28
    min-h-screen  w-full ' id='ui-bg' > 
    <ToastContainer position='bottom-right' />
    <Navbar />
      { showLogin && <Login />}
      <Routes>
        <Route path='/' element = { <Home />} />
        <Route path='/result' element = { <Result />} />
        <Route path='/buycredits' element = { <BuyCredit />} />
      </Routes>

      <Footer />
      
    </div>
  )
}

export default App