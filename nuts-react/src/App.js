import React from 'react';
import Hello from './hello';
import './App.css';
import Wrapper from './Wrapper';
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
      <Wrapper>
      {/*주석 사용 방법*/}
        <Hello isSpecial/>
        <div style={style}>{name}</div>
        <div className='gray-box'></div>
      </Wrapper>
  );
}

export default App;
