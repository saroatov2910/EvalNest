import React from 'react'
import NavBar from './NavBar/NavBar'
import Body from './Body/Body'
import Footer from './Footer/Footer'
import UserHomePage from '../User/UserHomePage/page'

function LandingPage() {

  const logIn = true
  
  return (
    <div>
      <NavBar />
      <Body /> 
      <Footer />
    </div>
  )
}

export default LandingPage