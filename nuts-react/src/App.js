import React, {useRef, useReducer, useMemo, useCallback} from 'react';
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
  const initialState = {
    inputs : {
      username: '',
      email: '',
      active: false
    },
    users :  [{
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    }]
  }
  function reducer(state, action){
    switch (action.type){
      case "CHANGE_INPUT":
        return {
          ...state,
          inputs:{
            ...state.inputs,
            [action.name]:action.value
          }
        };
      case "CREATE_USER":
        return {
          inputs:
            initialState.inputs,
            users: state.users.concat(action.user)
        };
      case "REMOVE_USER":
        return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
        };
      case "TOGGLE":
        return {
          ...state,
          users: state.users.map(user => user.id === action.id ?{...user, active: !user.active}: user)
        }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  const {users} = state;
  const { username, email, active} = state.inputs;
  const onChange = useCallback( e => {
    console.log("onChange");
    const { name, value} = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name, 
      value
    });
  }, []);
    
 
  const nextId = useRef(2);
  const onCreate = useCallback( () => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
        active: false
      }
    });
  },[username, email, active]);

  const onRemove = useCallback( id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id인것을 제거함
    console.log("onRemove");
    dispatch({
      type: "REMOVE_USER",
      id
    });
  }, []);
  const onToggle = useCallback(id =>{
    dispatch(
      {
        type: "TOGGLE", 
        id
      }
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
