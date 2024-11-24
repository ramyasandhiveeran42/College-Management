import React from 'react'
import Hero from '../../components/hero/Hero'
import About from '../../components/about/About'
import Contact from '../../components/contact/Contact'

const HomePage = () => {
  return (
    <div className='homePage'>
      <Hero/>
      <About/>
      <Contact/>
    </div>
  )
}

export default HomePage
