import React from 'react';

const UserForm = () => {
  return (
    <form>
      <h4 className='text-uppercase fw-semibold'>add new user</h4>
      <div className='form-group mt-2'>
        <label htmlFor="name">Name</label>
        <input id='name' name='name' className='form-control' type="text"/>
      </div>
      <div className='form-group mt-2'>
        <label htmlFor="email">Email</label>
        <input id='email' name='email' className='form-control' type="email"/>
      </div>
      <div className='form-group mt-2'>
        <label htmlFor="condition" className='me-2'>Condition</label>
        <input id='condition' name='condition' type="checkbox"/>
      </div>
      <div className='form-group mt-2'>
        <label htmlFor="part" className='me-2'>Part</label>
        <select name="part" id="part" className='form-control'>
          <option value="user.value">user</option>
          <option value="editor.value">editor</option>
          <option value="admin">admin</option>
        </select>
      </div>
      <button type='submit' className='btn btn-info mt-3'>Create</button>
    </form>
  );
};

export default UserForm;