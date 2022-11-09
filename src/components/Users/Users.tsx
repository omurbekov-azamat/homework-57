import React from 'react';
import UserItem from "./UserItem";
import {User} from "../../types";

interface Props {
  users: User[],
}

const Users: React.FC<Props> = ({users}) => {
  return (
    <>
      <h4 className='fw-bolder text-uppercase text-danger'>Users:</h4>
      {users.map((user) => {
        return (
          <UserItem key={user.id} user={user}/>
        )
      })}
    </>
  );
};

export default Users;