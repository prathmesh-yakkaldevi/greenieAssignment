import React, { useState } from 'react';
import './UserTable.css';
import UserRow from './UserRow.js';
import ReportModal from './ReportModal.js';

const UserTable = ({ userData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filteredUsers = userData.filter(
    (user) =>
      user.username &&
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
    setShowModal(false);
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
      {showModal && (
        <ReportModal
          selectedUser={selectedUser}
          onClose={handleCloseModal}
          onGenerateReport={generateDummyReport}
        />
      )}
    </div>
  );
};

export default UserTable;

