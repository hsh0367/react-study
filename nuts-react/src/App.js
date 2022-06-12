import React, {useRef} from 'react';
import './App.css';
import InputSample from './InputSample';
import UserList from './UserList';
function App() {
  const name = "first";
  const style = {
    backgroundColor: "black",//주석 사용 방법
    color: "aqua",
    fontSize: 20,
    padding: '1rem'
  }
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];
  const nextId = useRef(4);
  const onCreate = () => {
    nextId.current += 1;
  }
  return (
    <UserList users={users}/>
  );
}

export default App;
