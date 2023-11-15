import React, { useState } from 'react';

const AccountCreationTab = ({ onAddUser }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
  });

  const [isAccountCreated, setIsAccountCreated] = useState(false);

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
      username: formData.name,
      email: formData.email,
      phone: formData.mobile,
      creationDate: new Date().toISOString().split('T')[0],
      password: formData.password,
    };

    onAddUser(newUserData);
    console.log(newUserData);

    setFormData({
      name: '',
      email: '',
      mobile: '',
      password: '',
    });

    setIsAccountCreated(true);
    setTimeout(() => {
      setIsAccountCreated(false);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className={`p-4 rounded-md shadow-md  ${isAccountCreated ? 'bg-green-200' : 'bg-gray-200'}`}>
        <h2 className="text-2xl mb-4">Account Creation</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="border border-gray-300 rounded-md p-2 w-full lg:w-96" // Adjusted width here
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="border border-gray-300 rounded-md p-2 w-full lg:w-96" // Adjusted width here
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block mb-1">Mobile Number</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              required
              className="border border-gray-300 rounded-md p-2 w-full lg:w-96" // Adjusted width here
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="border border-gray-300 rounded-md p-2 w-full lg:w-96" // Adjusted width here
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AccountCreationTab;
