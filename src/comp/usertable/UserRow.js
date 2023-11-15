// UserRow.js

const UserRow = ({ user, onClick }) => {
  return (
    <tr onClick={onClick} className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
      <td className="py-2 px-4">{user.id}</td>
      <td className="py-2 px-4">{user.username}</td>
      <td className="py-2 px-4">{user.email}</td>
      <td className="py-2 px-4">{user.phone}</td>
      <td className="py-2 px-4">{user.creationDate}</td>
    </tr>
  );
};

export default UserRow;

