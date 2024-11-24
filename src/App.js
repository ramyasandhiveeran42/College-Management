import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage'
import StudentPage from './pages/studentPage/StudentPage'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import LoginDetailpage from './pages/logindetailpage/LoginDetailpage'
import FacultyPage from './pages/facultyPage/FacultyPage'

const App = () => {

  return (
    <div className='app'>
        <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginDetailpage/>}/>
        <Route path='/student/dashboard' element={<StudentPage/>}/>
        <Route path='/faculty/dashboard' element={<FacultyPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
