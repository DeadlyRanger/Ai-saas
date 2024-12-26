import React from 'react'
import { Route,Routes,Router } from 'react-router-dom'

import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import { SignInButton } from '@clerk/clerk-react'

const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Navbar />
      {/* <SignInButton /> */}
           <Routes>
            <Route path='/' element ={<Home />} />
            <Route path='/result' element ={<Result/>} />
            <Route path='/buy' element ={<BuyCredit/>} />
           </Routes>
           <Footer />

    </div>
  )
}

export default App