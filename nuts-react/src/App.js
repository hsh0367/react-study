import React from 'react';
import './App.css';
import InputSample from './InputSample';
function App() {
  const name = "first";
  const style = {
    backgroundColor: "black",//주석 사용 방법
    color: "aqua",
    fontSize: 20,
    padding: '1rem'
  }
  return (
    <InputSample />
  );
}

export default App;
