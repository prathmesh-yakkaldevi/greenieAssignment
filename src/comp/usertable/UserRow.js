// UserRow.js

import React from 'react';
import './UserRow.css';
const UserRow = ({ user, onClick }) => {
  return (
    <tr onClick={onClick}>
      <td>{user.id}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.creationDate}</td>
    </tr>
  );
};

export default UserRow;
