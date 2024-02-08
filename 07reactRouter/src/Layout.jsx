import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
//outlet is used where we want to dynamically change things/components


function Layout() {
  return (
    <>
    <Header />
    <Outlet /> 
    <Footer />
    </>
  )
}

export default Layout