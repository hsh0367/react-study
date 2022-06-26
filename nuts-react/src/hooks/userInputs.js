import {useReducer, useCallback} from 'react';

function reducer(state, action){
    switch (action.type){
        case "CHANGE":
            return {
                ...state,
                [action.name]: action.value,
            };
        case "RESET":
            return Object.keys(state).reduce((acc,current) =>{
                acc[current] = '';
                return acc;
            }, {});
        default:
            return state
    }
}
function useInputs(initialForm){
    const [form, dispatch] = useReducer(reducer, initialForm);
    const onchange = useCallback(e => {
        const {name , value} = e.target;
        dispatch({ type: 'CHANGE', name, value});
    },[]);
    const rest = useCallback(() => dispatch({
        type: "RESET"
    }), []);
    return [form, onchange, rest]
}

export default useInputs;