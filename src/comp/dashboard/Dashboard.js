import React, { useState } from 'react';
import UserTable from '../usertable/UserTable';
import AccountCreationTab from '../accountcreation/AccountCreationTab';
import mockUserData from '../usertable/userData';

const Dashboard = () => {
  const [userData, setUserData] = useState(mockUserData);
  const [activeTab, setActiveTab] = useState('userDetails');

  const handleAddUser = (newUser) => {
    newUser.id = userData.length + 1;
    setUserData([...userData, newUser]);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md">
      <h1 className="text-4xl mb-8 text-center font-semibold">User Management Dashboard</h1>
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`py-2 px-4 rounded-md bg-blue-500 text-white ${activeTab === 'userDetails' && 'bg-blue-700'}`}
          onClick={() => handleTabChange('userDetails')}
        >
          User Details
        </button>
        <button
          className={`py-2 px-4 rounded-md bg-blue-500 text-white ${activeTab === 'accountCreation' && 'bg-blue-700'}`}
          onClick={() => handleTabChange('accountCreation')}
        >
          Account Creation
        </button>
      </div>
      <div className="flex justify-center">
        {activeTab === 'userDetails' && <UserTable userData={userData} />}
        {activeTab === 'accountCreation' && <AccountCreationTab onAddUser={handleAddUser} />}
      </div>
    </div>
  );
};

export default Dashboard;
