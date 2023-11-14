import logo from './logo.svg';
import './App.css';
import UserTable from './comp/usertable/UserTable'; // Import the UserTable component
import AccountCreationTab from './comp/accountcreation/AccountCreationTab';

function App() {
  return (
    <div className="App">
      <h1>User Management Dashboard</h1>
       <UserTable />
       <AccountCreationTab/>
     </div>
  );
}

export default App;
