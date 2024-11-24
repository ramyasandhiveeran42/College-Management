import React, { useState } from "react";
import "./StudentList.css";

const StudentList = ({ students, setStudents }) => {
  const [editingId, setEditingId] = useState(null); 
  const [editedStudent, setEditedStudent] = useState({}); 

  const handleEditClick = (student) => {
    setEditingId(student.id); 
    setEditedStudent({ ...student }); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === editingId ? { ...student, ...editedStudent } : student
      )
    );
    setEditingId(null); 
  };

  return (
    <div className="student-list">
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Contact Number</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              {editingId === student.id ? (
                // Editable row
                <>
                  <td>
                    <input
                      type="text"
                      name="fullName"
                      value={editedStudent.fullName}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={editedStudent.dateOfBirth}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <select
                      name="gender"
                      value={editedStudent.gender}
                      onChange={handleInputChange}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="contactNumber"
                      value={editedStudent.contactNumber}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="address"
                      value={editedStudent.address}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <button className="save-button" onClick={handleSaveClick}>
                      Save
                    </button>
                  </td>
                </>
              ) : (
                // Read-only row
                <>
                  <td>{student.fullName}</td>
                  <td>{student.dateOfBirth}</td>
                  <td>{student.gender}</td>
                  <td>{student.contactNumber}</td>
                  <td>{student.address}</td>
                  <td>
                    <button
                      className="edit-button"
                      onClick={() => handleEditClick(student)}
                    >
                      Edit
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
