import React from 'react';
import Hello from './Hello';

function App() {
  const name = 'Wontak';
  return (
    <>
      <Hello />
      <div>안녕히 계세요 여러분! <br /> 
           저 {name}은 이 세상의 모든 굴레와 속박을 벗어 던지고 제 행복을 찾아 떠납니다! <br />
           여러분도 행복하세요~~!</div>
    </>
  );
}

export default App;