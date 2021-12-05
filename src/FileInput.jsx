import { useState } from 'react';
import { FILE, FOLDER } from './constants';

const FileInput = ({ display, onKeyDown }) => {
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
    return (
        <form style={{ display: display ? 'block' : 'none' }} onClick={onClick}>
            <input
                type="text"
                name="textInput"
                value={state.textInput}
                onChange={onChange}
                onKeyDown={(e) => {
                    if (e.keyCode == 13) {
                        e.preventDefault();
                        onKeyDown(e, { type: state.type });
                    }
                }}
            ></input>
            <select
                id="type"
                name="type"
                selected={state.type}
                onChange={onChange}
            >
                <option value={FILE}>File</option>
                <option value={FOLDER}>Folder</option>
            </select>
        </form>
    );
};

export default FileInput;
