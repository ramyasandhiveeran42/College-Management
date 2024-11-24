import React, { useState } from "react";
import "./CreateStudentForm.css";

const CreateStudentForm = ({ addStudent }) => {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    contactNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(student);
    alert("Student created successfully!");
    setStudent({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "Male",
      contactNumber: "",
      address: "",
    });
  };

  return (
    <div className="create-student-form">
      <h2>Create New Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={student.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={student.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="dateOfBirth"
          value={student.dateOfBirth}
          onChange={handleChange}
          required
        />
        <select
          name="gender"
          value={student.gender}
          onChange={handleChange}
          required>
          <option value="" disabled>Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          value={student.contactNumber}
          onChange={handleChange}
          required
        />
        <textarea
          name="address"
          placeholder="Address"
          value={student.address}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Create Student</button>
      </form>
    </div>
  );
};

export default CreateStudentForm;
