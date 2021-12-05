import { useContext } from 'react';
import { FILE } from './constants';
import FileInput from './FileInput.jsx';
import { FileSystemContext } from './FileSystemContext';
import useTree from './hooks/useTree';

const Node = ({ id }) => {
    const { onClickListener, onFileInputKeyDown, onDeleteFile, showFileInput } =
        useTree({ root: id });
    const { fs } = useContext(FileSystemContext);
    return (
        <li
            className={`${fs[id].type === FILE ? 'file' : 'folder'}`}
            onClick={(e) => onClickListener(e, { type: fs[id].type })}
        >
            <span className="name">
                {fs[id].name}{' '}
                {fs[id].parentID !== null && (
                    <span
                        onClick={(e) => onDeleteFile(e, { id })}
                        className="delete"
                    ></span>
                )}
            </span>
            <FileInput display={showFileInput} onKeyDown={onFileInputKeyDown} />
        </li>
    );
};

export default Node;
