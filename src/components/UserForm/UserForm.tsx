import React, {useState} from 'react';
import {User} from "../../types";

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    condition: false,
    part: '',
  });

  const onUserChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setUser(prev => ({...prev, [name]: value}));
  };

  const changeCondition = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {checked, name} = e.target;
    setUser(prev => ({...prev, [name]: checked}));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user.name !== '' && user.email !== '' && user.part !== '') {
      onSubmit({
        id: Math.random().toString(),
        ...user,
      });
    }

    setUser({
      name: '',
      email: '',
      condition: false,
      part: '',
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4 className='text-uppercase fw-semibold'>add new user</h4>
      <div className='form-group mt-2'>
        <label htmlFor="name">Name</label>
        <input
          id='name'
          name='name'
          type="text"
          className='form-control'
          value={user.name}
          required
          onChange={onUserChange}
        />
      </div>
      <div className='form-group mt-2'>
        <label htmlFor="email">Email</label>
        <input
          id='email'
          name='email'
          type="email"
          className='form-control'
          value={user.email}
          required
          onChange={onUserChange}
        />
      </div>
      <div className='form-group mt-2'>
        <label htmlFor="condition" className='me-2'>Condition</label>
        <input
          id='condition'
          name='condition'
          type="checkbox"
          onChange={changeCondition}
        />
      </div>
      <div className='form-group mt-2'>
        <label htmlFor="part" className='me-2'>Part</label>
        <select
          onChange={onUserChange}
          name="part" id="part"
          className='form-control'
          required
          value={user.part}
        >
          <option disabled value=''>Select a category!</option>
          <option value='user'>user</option>
          <option value='editor'>editor</option>
          <option value='admin'>admin</option>
        </select>
      </div>
      <button type='submit' className='btn btn-info mt-3'>Create</button>
    </form>
  );
};

export default UserForm;