import React, { useState } from "react";

function InputSample(){
    /*
    Input
        input의 onChange를 사용하면 이벤트 객체 e를 파라미터로 받아올 수 있다.
        이 객체의 e.target은 이벤트가 발생한 DOM을 가리킨다.
        e.target.value를 조회하면 현재 input의 value값을 알 수 있다.
    변경되는 값은 useState로 관리
        이벤트에 등록하는 함수에서는 이벤트 객체 e 를 파라미터로 받아와서 사용 할 수 있음
        e.target 은 이벤트가 발생한 DOM 인 input DOM을 가리킴
        e.target.value 를 조회하면 현재 input 에 입력한 값을 알 수 있음
        input 의 상태를 관리할 때에는 input 태그의 value 값도 설정
    */
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value)
    }
    const onReset = () =>{
        setText('')
    }
    return (
        <div>
            <input onChange={onChange}  value={text}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {text}</b>
            </div>
        </div>
    );
}
export default InputSample;