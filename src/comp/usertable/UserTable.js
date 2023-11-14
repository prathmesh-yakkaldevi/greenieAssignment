// UserTable.js

import React, { useState } from 'react';
import UserRow from './UserRow';
import './UserTable.css';
const UserTable = ({ userData }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = userData.filter(user =>
    user.username && user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <div className="user-table-container">
      <h2>User Details</h2>
      <input
        type="text"
        placeholder="Search by username..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <table className="user-table">
        <thead>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;