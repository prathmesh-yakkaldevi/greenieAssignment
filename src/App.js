import logo from './logo.svg';
import './App.css';
import UserTable from './comp/usertable/UserTable'; // Import the UserTable component

function App() {
  return (
    <div className="App">
      <h1>User Management Dashboard</h1>
       <UserTable />
     </div>
  );
}

export default App;
