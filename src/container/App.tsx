import React, {useState} from 'react';
import UserForm from "../components/UserForm/UserForm";
import Users from "../components/Users/Users";
import {User} from "../types";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (newUser: User) => {
    setUsers(prev => [...prev, newUser]);
  };

  return (
    <>
      <main className='container'>
        <div className='row'>
          <div className='col'>
            <UserForm onSubmit={addUser}/>
          </div>
          <div className='col'>
            <Users users={users}/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
