import React, { useState } from 'react';
import './StudentProfile.css';
import { useLocation } from 'react-router-dom';
import user from '../../assets/user-1.png'

const StudentProfile = () => {
  const location = useLocation(); 
  const initialData = location.state?.userData || {};

  const [studentData, setStudentData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="student-profile">
      <div className="profile-header">
        <img
          src={user|| 'https://via.placeholder.com/150'}
          alt="Profile"
          className="profile-picture"
        />
        <h2 className='student-name'>
          {isEditing ? (
            <>
              <input
                type="text"
                name="firstName"
                value={studentData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                value={studentData.lastName}
                onChange={handleChange}
                required
              />
            </>
          ) : (
            `${studentData.firstName} ${studentData.lastName}`
          )}
        </h2>
      </div>
      <div className="profile-details">
        {isEditing ? (
          <>
            <p>
              <strong>Date of Birth:</strong>
              <input
                type="date"
                name="dateOfBirth"
                value={studentData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <strong>Gender:</strong>
              <select
                name="gender"
                value={studentData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </p>
            <p>
              <strong>Blood Group:</strong>
              <input
                type="text"
                name="bloodGroup"
                value={studentData.bloodGroup}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <strong>Contact Number:</strong>
              <input
                type="text"
                name="contactNumber"
                value={studentData.contactNumber}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <strong>Address:</strong>
              <textarea
                name="address"
                value={studentData.address}
                onChange={handleChange}
                required
              ></textarea>
            </p>
          </>
        ) : (
          <>
            <p>
              <strong>Date of Birth:</strong> {studentData.dateOfBirth}
            </p>
            <p>
              <strong>Gender:</strong> {studentData.gender}
            </p>
            <p>
              <strong>Blood Group:</strong> {studentData.bloodGroup}
            </p>
            <p>
              <strong>Contact Number:</strong> {studentData.contactNumber}
            </p>
            <p>
              <strong>Address:</strong> {studentData.address}
            </p>
          </>
        )}
      </div>
      {isEditing ? (
        <button className="save-profile-btn" onClick={handleSave}>
          Save
        </button>
      ) : (
        <button
          className="edit-profile-btn"
          onClick={() => setIsEditing(true)}
        >
          Edit Profile
        </button>
      )}
    </div>
  );
};

export default StudentProfile;
