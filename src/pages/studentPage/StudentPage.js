import React from 'react'
import StudentProfile from '../../components/studentProfile/StudentProfile'
import SubjectsList from '../../components/subjectsList/SubjectsList.js'

const StudentPage = () => {
  return (
    <div className='studentPage'>
      <StudentProfile/>
      <SubjectsList/>
    </div>
  )
}

export default StudentPage
