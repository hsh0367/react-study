import React, {useRef, useState} from 'react';
import './App.css';
import UserList from './UserList';
import CreateUser from './CreateUser';
function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email} = inputs;
  const onChange = e => {
    const { name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    }
  ]);
    
 
  const nextId = useRef(2);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users.concat(user));
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }

  /*
  질문 ------
  onClick={() => onRemove(user.id)} 이 코드는 잘 동작하는데
  onClick={onRemove(user.id)} 이 코드는 왜 동작하지 않는건가요?

  답변 ---
  onClick={someFunction()} 을 해버리면 해당 콤포넌트가 렌더링이 되는것과 동시에 someFunction함수를 실행시켜버립니다.

  그래서 보통 onClick={someFunction} 으로 지정해서 () 를 제외하는 방법으로 함수가 즉시실행 되지 않게 하고, 클릭했을때 실행이 되도록 해주죠

  그런데 예제와 같이 onRemove의 경우, 해당 함수가 실행될 떄 아이디 값도 받아와야 하잖아요.
  이런 경우에 onClick = { onRemove(user.id) } 를 해버리면, 해당 콤포넌트가 렌더링됨가 동시에 이 함수 실행이 되어버려서 아마 아무것도 렌더링이 되어버리지 않을거에요. 콘솔에서도 오류메시지가 발생할거구요.

  따라서 이런 문제들을 해결하기 위해 onClick에 콜백 함수를 넣어주고, 해당 함수가 실행될 때 user.id를 건네주어 실행시키는 방법으로 처리를 하는거에요
  */
  const onRemove =  id =>{
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id인것을 제거함
    setUsers(users.filter(user => user.id !== id));
  };
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}/>
        <UserList users={users} onRemove={onRemove}/>

    </>
  );
}

export default App;
