import React from 'react'
import './Hero.css'
import darkArrow from'../../assets/dark-arrow.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1 className='ac'>College Management System</h1>
        <p className='ac'>Manage students and faculty efficiently!</p>
        <div className='ac'>
        <Link to='/login'><button className='btn'>Login or Sign Up <img src={darkArrow} alt='no arrow' className='arrowimg'/></button></Link>
        </div>
      </div>
      <main className="homepage-main">
      </main>
    </div>
  )
}

export default Hero
