import React from 'react';
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
  return (
    <UserList />
  );
}

export default App;
