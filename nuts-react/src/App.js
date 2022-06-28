import React, {useRef, useReducer, useMemo, useCallback} from 'react';
import './App.css';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './hooks/userInputs';
function countActiveUsers(users){
  console.log('활성 사용자 수를 세는중...')
  return users.filter(user => user.active).length;
}

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
export const UserDispatch = React.createContext(null);

function App() {
  // const countActiveUsers = () => {
  //   console.log('활성 사용자 수를 세는중...')
  //   return users.filter(user => user.active).length;
  // }
  const [{ username, email, active}, onChange, reset]  = useInputs({
    username: '',
    email: '',
    active: false
  });
  const [state, dispatch] = useReducer(reducer, initialState);
  const {users} = state;


  // const onChange = useCallback( e => {
  //   console.log("onChange");
  //   const { name, value} = e.target;
  //   dispatch({
  //     type: "CHANGE_INPUT",
  //     name, qaw  q
   //     value
  //   });
  // }, []);
    
 
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
    nextId.current += 1;
    reset();
  },[username, email, active]);

  const count = useMemo( () => countActiveUsers(users), [users]);
  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}/>
      <UserList users={users}/>
      <div> 활성사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
