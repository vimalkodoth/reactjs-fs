import { useState } from 'react';
import { FILE } from '../constants';

const useFileInput = () => {
    const [state, setState] = useState({
        textInput: '',
        type: FILE,
    });

    const onChange = (e) => {
        e.preventDefault();
        setState((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const onClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    return { onClick, onChange, state };
};

export default useFileInput;
