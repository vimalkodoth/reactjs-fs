import { FILE } from './constants';
import FileInput from './FileInput.jsx';
import { useContext } from 'react';
import { FileSystemContext } from './FileSystemContext';
import useTree from './hooks/useTree';

const RecursiveTree = ({ root }) => {
    const { fs } = useContext(FileSystemContext);

    const {
        onClickListener,
        onFileInputKeyDown,
        onDeleteFile,
        showFileInput,
        children,
    } = useTree({ root });

    return (
        <>
            <li
                className={`${fs[root].type === FILE ? 'file' : 'folder'}`}
                onClick={(e) => onClickListener(e, fs[root].type, root)}
            >
                <span className="name">
                    {fs[root].name}{' '}
                    {fs[root].parentID !== null && (
                        <span
                            onClick={(e) => onDeleteFile(e, { root })}
                            className="delete"
                        ></span>
                    )}
                </span>
                <FileInput
                    display={showFileInput}
                    onKeyDown={onFileInputKeyDown}
                />
            </li>
            <ul>
                {children &&
                    children.map((child) => {
                        return (
                            <RecursiveTree
                                fileSystem={fs}
                                root={child}
                                key={child}
                            />
                        );
                    })}
            </ul>
        </>
    );
};

export default RecursiveTree;
