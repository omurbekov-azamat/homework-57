import React from 'react';

const UserItem = () => {
  return (
    <div className="card mb-2">
      <div className="row no-gutters">
        <div className="col-sm-8">
          <div className="card-body">
            <h5 className="card-title">Name: John</h5>
            <p className="card-text small">Email: John@gmail.com</p>
            <p className="card-text">Condition: Active</p>
            <p className="card-text">Part: Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;