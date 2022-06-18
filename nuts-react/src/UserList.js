 import React, {useEffect} from "react";
/*
useEffect
    화면이 처음 떴을때 실행.
    deps에 [] 빈배열을 넣을 떄.
    life cycle중 componentDidmount처럼 실행
    화면이 사라질때 실행(clean up함수).
    componentWillUnmount처럼 실행
    deps에 넣은 파라미터값이 업데이트 됬을때 실행.
    componentDidUpdate처럼 실행.
*/
 const User = React.memo(function User({user, onRemove, onToggle}){
    useEffect(()=>{
        console.log('user 값이 설정됨');
        return () => {
            console.log('user 가 바뀌기 전..');
        };
    }, [user])
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
    );
 });

 const UserList = React.memo(function UserList({users, onRemove, onToggle}){
    return (
        <div>
            {
                users.map((user, index) => (
                    <User user={user} key={index} onRemove={onRemove} onToggle={onToggle}/>
                ))
            }
        </div>
    );
 });
 export default UserList;
