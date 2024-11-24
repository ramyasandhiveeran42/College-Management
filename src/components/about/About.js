import React from 'react'
import './About.css'
import about_img from '../../assets/SIS-banner.webp'

const About = () => {
  return (
    <div className='about'>
       <div className="about-left">
          <img src={about_img} alt='' className='about-img'/>
       </div>
       <div className="about-right">
         <h3>What is College Management System?</h3>
         <h2>The College Management System is an integrated platform designed to simplify and manage various aspects of college operations, including student and faculty management.</h2>
         <h3>Features of the System : </h3>
         <h2>Faculty can view and manage student details, create new students, and assign students to classes.</h2>
          <p>
          The College Management System is designed to streamline administrative tasks, enhance communication between students and faculty, and provide an easy-to-use platform for managing student information, course enrollments, and academic progress.
        </p>
       </div>
    </div>
  )
}

export default About