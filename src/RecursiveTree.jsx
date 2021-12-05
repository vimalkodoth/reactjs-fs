import { FILE } from './constants';
import FileInput from './FileInput.jsx';
import { useContext, useState } from 'react';
import { FileSystemContext } from './FileSystemContext';

const RecursiveTree = ({ root }) => {
    const { fs, addEntry, deleteEntry } = useContext(FileSystemContext);
    const children = fs[root]?.children?.slice(0);
    const [showFileInput, setShowFileInput] = useState(false);

    const onClickListener = (e, type) => {
        if (type === FILE) return;
        setShowFileInput((state) => !state);
    };

    const onFileInputKeyDown = (e, { type }) => {
        const inputText = e.target.value;
        addEntry({ name: inputText, fileType: type, id: root });
        setShowFileInput((state) => !state);
    };

    const onDeleteFile = (e, { root }) => {
        deleteEntry({ id: root });
        setShowFileInput((state) => !state);
    };

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
