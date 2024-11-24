import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [isSignUp, setIsSignUp] = useState(false); 
  const [userType, setUserType] = useState('student'); 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    bloodGroup: '',
    contactNumber: '',
    address: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (isSignUp) {
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      alert(`Sign Up successful for ${userType}`);
      navigate(`/${userType}/dashboard`, { state: { userData: formData } }); 
    } else {
      alert(`Sign In successful for ${userType}`);
      navigate(`/${userType}/dashboard`, { state: { userData: formData } }); 
    }
  };

  return (
    <div className="login-form-container">
      <h2 className="login-form-title">
        {isSignUp ? 'Sign Up' : 'Sign In'} as{' '}
        {userType.charAt(0).toUpperCase() + userType.slice(1)}
      </h2>

      <form onSubmit={handleSubmit} className="login-form">
        {isSignUp && (
          <>
            <input
              className="login-form-input"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              className="login-form-input"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            {userType === 'student' && (
              <>
                <input
                  className="login-form-input"
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                />
                <select
                  className="login-form-input"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <input
                  className="login-form-input"
                  type="text"
                  name="bloodGroup"
                  placeholder="Blood Group"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  required
                />
                <input
                  className="login-form-input"
                  type="text"
                  name="contactNumber"
                  placeholder="Contact Number"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                />
                <textarea
                  className="login-form-textarea"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                ></textarea>
              </>
            )}
          </>
        )}

        <input
          className="login-form-input"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="login-form-input"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {isSignUp && (
          <input
            className="login-form-input"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        )}

        <button type="submit" className="login-form-button">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>
      </form>

      <div className="login-form-toggle-section">
        <p>
          {isSignUp
            ? 'Already have an account? '
            : "Don't have an account? "}
          <span
            onClick={() => setIsSignUp(!isSignUp)}
            className="login-form-toggle-link"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </span>
        </p>
        <p>
          Login as{' '}
          <span
            onClick={() =>
              setUserType(userType === 'student' ? 'faculty' : 'student')
            }
            className="login-form-toggle-link"
          >
            {userType === 'student' ? 'Faculty' : 'Student'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
