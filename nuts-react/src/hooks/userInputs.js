import {useState, useCallback} from 'react';

function useInputs(initialForm){
    const [form, setForm] = useState(initialForm);
    const onchange = useCallback(e => {
        const {name , value} = e.target;
        setForm(form => ({...form,[name]:value}));
    },[]);
    const rest = useCallback(() => setForm(initialForm), [initialForm]);
    return [form, onchange, rest]
}

export default useInputs;