// Dashboard.js

import React, { useState } from 'react';
import UserTable from '../usertable/UserTable'; 
import AccountCreationTab from '../accountcreation/AccountCreationTab'; 
import mockUserData from '../usertable/userData'; 

const Dashboard = () => {
    const [userData, setUserData] = useState(mockUserData);
    const [activeTab, setActiveTab] = useState('userDetails');

  const handleAddUser = (newUser) => {
      newUser.id = userData.length + 1;
    console.log(newUser);
    setUserData([...userData, newUser]);
  };

  const handleTabChange = (tab) => {
      setActiveTab(tab);
    };
    
    return (
      <div className="dashboard">
        <h1>User Management Dashboard</h1>
        <div className="tab-buttons">
          <button
            className={activeTab === 'userDetails' ? 'active' : ''}
            onClick={() => handleTabChange('userDetails')}
            >
            User Details
          </button>
          <button
            className={activeTab === 'accountCreation' ? 'active' : ''}
            onClick={() => handleTabChange('accountCreation')}
            >
            Account Creation
          </button>
        </div>
        <div className="tab-content">
          {activeTab === 'userDetails' && <UserTable userData={userData} />}
          {activeTab === 'accountCreation' && <AccountCreationTab onAddUser={handleAddUser} />}
        </div>
      </div>
    );
};

export default Dashboard;