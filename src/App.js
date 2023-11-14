import logo from './logo.svg';
import './App.css';
import UserTable from './comp/usertable/UserTable'; // Import the UserTable component
import AccountCreationTab from './comp/accountcreation/AccountCreationTab';
import Dashboard from './comp/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
       {/* <UserTable />
       <AccountCreationTab/> */}
       <Dashboard/>
     </div>
  );
}

export default App;
