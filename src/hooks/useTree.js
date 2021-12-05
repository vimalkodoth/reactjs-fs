import { useContext, useState } from 'react';
import { FILE } from '../constants';
import { FileSystemContext } from '../FileSystemContext';

const useTree = ({ root }) => {
    const [showFileInput, setShowFileInput] = useState(false);
    const { fs, addEntry, deleteEntry } = useContext(FileSystemContext);
    const children = fs[root]?.children?.slice(0);

    const onClickListener = (e, { type }) => {
        if (type === FILE) return;
        setShowFileInput((state) => !state);
    };

    const onFileInputKeyDown = (e, { type }) => {
        const inputText = e.target.value;
        addEntry({ name: inputText, fileType: type, id: root });
        setShowFileInput((state) => !state);
    };

    const onDeleteFile = (e, { id }) => {
        deleteEntry({ id });
        setShowFileInput((state) => !state);
    };

    return {
        onClickListener,
        onFileInputKeyDown,
        onDeleteFile,
        showFileInput,
        children,
    };
};

export default useTree;
