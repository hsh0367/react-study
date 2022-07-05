import React, {useState} from 'react'
import CheckBox from './components/CheckBox.js';

function App() {
  const [check, setCheck] = useState(false);
  const onChange = e => {
    setCheck(e.target.checked);
  };
  return (
    <div>
      <CheckBox onChange={onChange} checked={check}>
        다음 약관에 모두 동의
      </CheckBox>
      <p>
        <b>check: </b>
        {check ? 'ture' : 'false'}
      </p>
    </div>
  );
}

export default App;
