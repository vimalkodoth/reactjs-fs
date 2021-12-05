import { FILE, FOLDER } from './constants';
import useFileInput from './hooks/useFileInput';

const FileInput = ({ display, onKeyDown }) => {
    const { state, onChange, onClick } = useFileInput();
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
