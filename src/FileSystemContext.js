import React, { useState } from 'react';
import { getFileSystem } from './mockFileSystem';

const mockFs = getFileSystem();
const FileSystemContext = React.createContext();
const { Provider } = FileSystemContext;

const FileSystemContextProvider = ({ children }) => {
    const [state, setState] = useState({
        fs: mockFs,
        history: [],
        isUndo: false,
    });

    const addEntry = ({ id, fileType, name }) => {
        setState((state) => {
            const root = state.fs[id];
            const nextId = Object.keys(state.fs).length;
            return {
                ...state,
                history: [state],
                isUndo: true,
                fs: {
                    ...state.fs,
                    [id]: {
                        ...state.fs[id],
                        children: [...(root.children || []), nextId],
                    },
                    [nextId]: {
                        ...root,
                        parentID: id,
                        type: fileType,
                        name,
                        children: [],
                    },
                },
            };
        });
    };

    const deleteEntry = ({ id }) => {
        setState((state) => {
            const parentID = state.fs[id].parentID;
            const filteredFs = Object.keys(state.fs)
                .filter((key) => key !== id)
                .reduce((obj, key) => {
                    obj[key] = state.fs[key];
                    return obj;
                }, {});
            const filteredIds = filteredFs[parentID].children?.filter(
                (child) => id !== child
            );
            return {
                ...state,
                history: [state],
                isUndo: true,
                fs: {
                    ...filteredFs,
                    [parentID]: {
                        ...filteredFs[parentID],
                        children: [...filteredIds],
                    },
                },
            };
        });
    };

    const undoEntry = () => {
        setState((state) => {
            const { history } = state;
            if (!history.length) {
                return state;
            }
            return {
                ...history[0],
                isUndo: false,
                history: [],
            };
        });
    };

    return (
        <Provider
            value={{
                fs: state.fs,
                addEntry,
                deleteEntry,
                undoEntry,
                isUndo: state.isUndo,
            }}
        >
            {children}
        </Provider>
    );
};
export { FileSystemContextProvider, FileSystemContext };
