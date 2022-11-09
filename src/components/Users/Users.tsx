import React from 'react';
import UserItem from "./UserItem";

const Users = () => {
  return (
    <>
      <h4 className='fw-bolder text-uppercase text-danger'>Users:</h4>
      <UserItem/>
      <UserItem/>
      <UserItem/>
    </>
  );
};

export default Users;