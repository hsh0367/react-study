import React, {useRef, useState, useMemo, useCallback} from 'react';
import './App.css';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는중...')
  return users.filter(user => user.active).length;
}
function App() {
  // const countActiveUsers = () => {
  //   console.log('활성 사용자 수를 세는중...')
  //   return users.filter(user => user.active).length;
  // }
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    active: false
  });
  const { username, email, active} = inputs;
  const onChange = useCallback( e => {
    console.log("onChange");
    const { name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }, [inputs]);
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    }
  ]);
    
 
  const nextId = useRef(2);
  const onCreate = useCallback( () => {
    console.log("onCreate");
    const user = {
      id: nextId.current,
      username,
      email,
      active
    };
    setUsers(users.concat(user));
    setInputs({
      username: '',
      email: '',
      active: false
    });
    nextId.current += 1;
  },[users, username, email]);

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
  -------------
  seCallback : 특정 함수 재사용
  useMemo: 특정 결과값 재사용

  컴포넌트에서 props 가 바뀌지 않았으면
  Virtual DOM 에 새로 렌더링하는 것 조차 하지 않고
  컴포넌트의 결과물을 재사용 하는 최적화 작업을 하려면,
  ***함수 재사용 필수

  deps 배열에 꼭 포함되야 하는 것: 함수 안에서 사용하는 상태 혹은 props

  컴포넌트 렌더링 최적화 작업을 해주어야만 성능이 최적화 : useCallback & React.memo
  */

  const onRemove = useCallback( id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id인것을 제거함
    console.log("onRemove");
    setUsers(users.filter(user => user.id !== id));
  }, [users]);
  const onToggle = useCallback(id =>{
    setUsers(user =>
      users.map(user=>
        user.id === id ? {...user, active: !user.active} : user
      )
    );
  }, [users]);
  const count = useMemo( () => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div> 활성사용자 수 : {count}</div>
    </>
  );
}

export default App;
