import React from 'react';
import Hello from './Hello';
import './App.css';

function App() {
  const name = 'Wontak Lee';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }
  return (
    <>
      {/* 주석은 화면에 보이지 않습니다. 안심하세요. 어 지혈제를 썼고 응급수술을 했어요. */}
      /* 피를 너무 많이 흘려서 이거 하마터면 큰일날 뻔했습니다. 주석 쓸 때는 중괄호를 치세요. */
      <Hello 
        // 열리는 태그 내에서는 주석을 작성할 수 있습니다. 총알이 영 좋지 않은 곳에 맞았어요.
      />
      <div>안녕히 계세요 여러분! <br /> 
      <div style={style}>{name}</div>는 이 세상의 모든 굴레와 속박을 벗어 던지고 제 행복을 찾아 떠납니다! <br />
      여러분도 행복하세요~~!
      <div className="gray-box"></div>
      </div>
    </>
  );
}

export default App;