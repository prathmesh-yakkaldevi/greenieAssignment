// AccountCreationTab.js

import React, { useState } from 'react';
import mockUserData from '../usertable/userData';

const AccountCreationTab = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUserData = {
      id: mockUserData.length + 1,
      name: formData.name,
      email: formData.email,
      phone: formData.mobile,
      creationDate: new Date().toISOString().split('T')[0],
    };

    mockUserData.push(newUserData);

    // Log updated user data to the console
    console.log('Updated User Data:', mockUserData);

    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      mobile: '',
    });

    // Notify the user about successful update
    console.log('Successfully updated user information!');
  };

  return (
    <div>
      <h2>Account Creation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="mobile">Mobile Number:</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AccountCreationTab;
