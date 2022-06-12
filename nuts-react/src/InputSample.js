import React, { useRef, useState } from "react";
/*
useRef
    javascript에서 특정 Dom을 선택하는 역할 ex) getElementById, querySelector
    특정 DOM에 접근할 때 사용한다.
    외부 라ㅣ브러리 사용할때 유용하다.
    원하는 위치에 ref={} 의 형태로 작성하면 된다.
    포커스를 잡으려면 nameInput.current.focus() 형태로 작성하면 된다.
    const nameInput = useReft();

    const onClick = () => {
        nameInput.current.focus();
    }

    return(
        <input ref={nameInput} />
        <button onClick={onClick}>클릭</button>
    )
*/
function InputSample(){
    const [inputs, setInputs] = useState({
        name : '',
        nickname : ''
    });
    const nameInput = useRef();

    const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출
    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한뒤
            [name] : value // name 키를 가진 값을 value로 설정
        });
    };
    const onReset = () =>{
        setInputs({
            name: '',
            nickname: '',
        })
        nameInput.current.focus();
    };
    return (
       <div>
           <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>
           <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
           <button onClick={onReset}>초기화</button>
           <div>
               <b>값: </b>
               {name} / {nickname}
           </div>
       </div>
    );
}
export default InputSample;