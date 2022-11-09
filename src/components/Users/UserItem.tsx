import React from 'react';
import {User} from "../../types";

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
  return (
    <div className="card mb-2">
      <div className="row no-gutters">
        <div className="col-sm-8">
          <div className="card-body">
            <h5 className="card-title">Name: {user.name}</h5>
            <p className="card-text small">Email: {user.email}</p>
            <p className="card-text">Condition: {user.condition}</p>
            <p className="card-text">Part: {user.part}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;