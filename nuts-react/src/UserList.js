 import React from "react";
/*
Map을 이용한 렌더링
    arr.map(i => ) 의 형태로 하위 컴포넌트에게 값을 전달해준다.
Map에서 Key가 필요한 이유
    Map에 key 값이없다면 중간의 값이 바뀌었을때 그 하위 값들이 전부 변하기 때문인다. key값을 사용한다면 key를 이용해 중간의 값을 추가하게 된다.
*/
 function User({user, onRemove, onToggle}){
    return (
        <div> 
            <b style={{
                cursor: 'pointer',
                color: user.active ? 'green' : 'black'
            }} 
            onClick={() => onToggle(user.id)}>{user.username}</b>
            <span>({user.email})</span>
            <span>/ {user.active.toString()}</span>
            <button onClick={()=> onRemove(user.id)}> 삭제</button>
        </div>
    )
 }

 function UserList({users, onRemove, onToggle}){
    return (
            <div>
                {
                    users.map((user, index) => (
                        <User user={user} key={index} onRemove={onRemove} onToggle={onToggle}/>
                    ))
                }
            </div>
    );
 }
 export default UserList;
