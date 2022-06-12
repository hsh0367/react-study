 import React from "react";
/*
Map을 이용한 렌더링
    arr.map(i => ) 의 형태로 하위 컴포넌트에게 값을 전달해준다.
Map에서 Key가 필요한 이유
    Map에 key 값이없다면 중간의 값이 바뀌었을때 그 하위 값들이 전부 변하기 때문인다. key값을 사용한다면 key를 이용해 중간의 값을 추가하게 된다.
*/
 function User({user}){
    return (
        <div> 
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
 }

 function UserList({users}){
    return (
            <div>
                {
                    users.map(user => (
                        <User user={user} key={user.id}/>
                    ))
                }
            </div>
    );
 }
 export default UserList;
