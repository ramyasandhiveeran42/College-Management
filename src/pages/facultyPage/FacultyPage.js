import React, { useState } from "react";
import CreateStudentForm from "../../components/createStudentForm/CreateStudentForm";
import StudentList from "../../components/studentList/StudentList";

const FacultyPage = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      fullName: "John Doe",
      dateOfBirth: "2000-01-15",
      gender: "Male",
      contactNumber: "1234567890",
      address: "123 Main St, City, Country",
    },
    {
      id: 2,
      fullName: "Jane Smith",
      dateOfBirth: "1998-06-20",
      gender: "Female",
      contactNumber: "9876543210",
      address: "456 Another St, City, Country",
    },
  ]);

  const addStudent = (student) => {
    const newStudent = {
      id: students.length + 1,
      fullName: `${student.firstName} ${student.lastName}`,
      dateOfBirth: student.dateOfBirth,
      gender: student.gender,
      contactNumber: student.contactNumber,
      address: student.address,
    };
    setStudents([...students, newStudent]);
  };

  return (
    <div>
      <h1>Faculty Dashboard</h1>
      <CreateStudentForm addStudent={addStudent} />
      <StudentList students={students} setStudents={setStudents} />
    </div>
  );
};

export default FacultyPage;

