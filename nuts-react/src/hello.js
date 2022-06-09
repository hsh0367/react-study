import React from 'react';

function Hello(props){
    return <div style={{color: props.color}}>{props.isSpecial && <b>*</b>}안녕 안녕 {props.name}</div>
}

Hello.defaultProps = {
    name : "이름을 설정하지 않았습니다.",
    color: "black"
}
export default Hello;