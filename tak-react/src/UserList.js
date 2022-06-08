import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: 'Wontak Lee',
      email: 'takgung6820@gmail.com'
    }, 
    {
      id: 2,
      username: 'Company Tak',
      email: 'wontak.lee@gwebscorp.com'
    }, 
    {
      id: 3,
      username: 'Bu-kae Tak',
      email: 'roundt2505@naver.com'
    }
  ];
  return (
    <div>
      {users.map(user => (
        <User user={user} />
      ))}
    </div>
  );
}

export default UserList;