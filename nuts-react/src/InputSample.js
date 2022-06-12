import React, { useState } from "react";

function InputSample(){
    /*
    객체를 변화 시키고 싶은 경우에는 기존의 객체는 수정하지 않고, 새로운 객체를 만들어서 수정해야 한다.
    input의 개수 만큼 useState를 만들기에는 너무나도 비효율적 => 1개 만든 이후에 객체를 이용하여 비구조화 할당을 이용하여 원하는 변수를 꺼낸 뒤에 처리해주기.
    input => key-value 형태 ===> name, value 형태 이용 잘 해주기.


    본문에서 말하는 최적화란
    https://stackoverflow.com/a/24719289/10694438
    setState는 shouldComponentUpdate(nextProps, nextState)를 트리거하는데 이 메소드의 boolean 반환값에 따라 render 호출 여부가 결정됩니다. 이 메소드를 재정의하지 않으면 setState 호출 시마다 render가 호출됩니다.
    본문의 '최적화'는 여러분이 shouldComponentUpdate 재정의를 통해 render 호출 여부를 결정하는 것을 말합니다. 해당 예시는 다음과 같습니다.

    shouldComponentUpdate(nextProps: Props, nextState: State) {
    for (const [key, value] of Object.entries(nextState)) {
        if (typeof value != "object") {
        if (this.state.isLoading != nextState.isLoading) {
            return true;
        }
        }
        else {
        // codes for deep comparison here depending on your case
        }
    }
    return false;
    }
    state는 왜 immutable하게 다뤄야 하는가
    위에서 설명한 최적화에 대한 이해를 하셨으면 이 부분에 대해서도 자연스레 이해하셨을 것입니다. React는 개발자가 호출한 setState로 특정 state의 값이 실제로 변경되기 전에 shouldComponentUpdate를 호출시켜 개발자로 하여금 해당 state의 기존 값과 새로운 값을 비교하여 render 호출 여부를 결정하도록 기회를 줍니다.
    여러분이 만약 다음과 같은 state set이 있고 shouldComponentUpdate를 통해 incremental의 변경에 대해 최적화한다고 합시다.

    state = {
    incremental: 0,
    ...
    };
    incremental를 다음과 같은 방식으로 변경한다면

    this.setState({
    incremental: ++incremental
    });
    위의 setState 호출 후 바로 호출될 여러분이 정의한 shouldComponentUpdate에서 현재 incremental값이 변경될 값과 동일하므로 변경점을 찾지 못할 것이고 결국 false를 반환하게 될 것입니다.

    결론적으로 state를 immutable하게 취급하라는 이유는 위의 예시와 같이 다른 lifecycle 메소드들에서 여러분이 값을 직접 지정한 state에 대해 참조가 일어날 때 컴포넌트 전체 로직이 깨질 여지가 있기 때문입니다. 따라서 React는 React가 해당 state를 변경하기 전까지 여러분이 현재 state 값을 지정하지 않기를 권장합니다.

    그럼에도 현재 state에 직접 변경을 가하여 최적화하고 싶은 분들이 계실 것이고 저도 그중 한 명입니다. 그 사례는 대부분 Array 타입의 state를 변경하는 경우일 것이기에 그에 대한 예시로 설명해보겠습니다. 해당 state에 데이터를 추가 혹은 삭제 시 shouldComponentUpdate에서 검사할 필요도 없이 render는 반드시 호출돼야 합니다. 이 경우 아래와 같은 배열 복사는 무의미합니다.

    const newItems = Array.from(this.state.items);
    ... // data insertion into newItems
    this.setState({
    items: newItems
    });
    다른 메소드에서 this.state.items의 어떤 원소들의 특정 값 혹은 그 원소 자체를 바꾸고 이를shouldComponentUpdate에서 최적화 시키고 싶은 경우, 해당 변경을 알리는 변수를 따로 두면 쉽게 구현할 수 있습니다.

    private onInputChange(ev: React.FormEvent<HTMLInputElement>) {
    const input = ((ev.target as HTMLInputElement).value).toLocaleLowerCase();
    for (const item of this.state.items) {
        const preDisplay = item.display
        item.display = item.nameForFiltering.includes(input); // display, nameForFiltering은 각각 items[i]의 boolean, string property
        this.hasDataModified = preDisplay != item.display;
    }
    this.setState({
        items: this.state.items
    });
    }

    shouldComponentUpdate(nextProps: Props, nextState: State) {
    ...
    if (this.hasDataModified) {
        this.hasDataModified = false;
        return true;
    }
    }
    useState hook과 spread 연산자
    함수형 컴포넌트에서 state 관리를 위한 hook useState(...)는 class형 컴포넌트 state의 특정 키/값 쌍에 대응합니다. 풀어서 설명하자면
    class형 컴포넌트의 this.state.<키> == 함수형 컴포넌트의 useState(...)[0]
    class형 컴포넌트의 this.setState({키: 값}) == 함수형 컴포넌트의 useState(...)[1](값)
    본문에서 state setter에서 spread 연산자를 사용한 이유는 저 값이 object타입이기 때문입니다. 함수형 컴포넌트에서 useState로 관리하는 어떤 state 값이 object 타입이 아니거나, class형 컴포넌트일 경우 spread 연산자를 사용할 필요가 없습니다.
    */
    const [inputs, setInputs] = useState({
        name : '',
        nickname : ''
    });
    const { name, nickname } = inputs;

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
    };
    return (
       <div>
           <input name="name" placeholder="이름" onChange={onChange} value={name}/>
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