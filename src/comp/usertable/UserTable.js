import React, { useState } from 'react';
import UserRow from './UserRow.js';
import ReportModal from './ReportModal.js';

const UserTable = ({ userData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filteredUsers = userData.filter(
    (user) =>
      (
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.phone.toLowerCase().includes(searchTerm.toLowerCase())
      )
      
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
    <div className="p-4">
      <h2 className="text-2xl mb-4">User Details</h2>
      <input
        type="text"
        placeholder="Search by keyword..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4"
      />

      <table className="w-full border-collapse border border-gray-300">
        <thead>
        <tr className="border border-gray-300">
          <th className="px-4 py-2">ID</th>
          <th className="px-4 py-2">Username</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Phone</th>
          <th className="px-4 py-2">Creation Date</th>
        </tr>
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
