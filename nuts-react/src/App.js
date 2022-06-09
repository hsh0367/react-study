import React from 'react';
import './App.css';
import Counter from './Counter';
function App() {
  const name = "first";
  const style = {
    backgroundColor: "black",//주석 사용 방법
    color: "aqua",
    fontSize: 20,
    padding: '1rem'
  }
  return (
    <Counter></Counter>
  );
}

export default App;
