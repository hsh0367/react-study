import React, { useRef } from 'react';
import UserList from './UserList';

function App() {
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

  const nextId = useRef(4);
  const onCreate = () => {
    // 나중에 구현할 배열에 항목 추가하는 로직
    // ...
    nextId.current += 1;
  }
  return <UserList users={users} />;
}

export default App;