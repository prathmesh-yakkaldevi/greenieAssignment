import React, { useState } from 'react';
import './UserTable.css';
import UserRow from './UserRow.js';

const UserTable = ({ userData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = userData.filter(
    (user) =>
      user.username &&
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  const generateDummyReport = (user) => {
    console.log(`Generating report for ${user.username}`);
    alert(`Generated report for ${user.username}`);
    handleCloseModal();
  };

  return (
    <div className="user-table-container">
      <h2>User Details</h2>
      <input
        type="text"
        placeholder="Search by username..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <table className="user-table">
        <thead>
          {/* Table headers */}
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
           <UserRow key={user.id} user={user} onClick={() => handleUserClick(user)} />
          ))}
        </tbody>
      </table>

      {/* Modal for generating report */}
      {selectedUser && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              close &times;
            </span>
            <h3>Generate Report for {selectedUser.username}</h3>
            <button onClick={() => generateDummyReport(selectedUser)}>
              Generate Report
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTable;

