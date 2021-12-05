import { useContext } from 'react';
import { FileSystemContext } from './FileSystemContext';
import useTree from './hooks/useTree';
import Node from './Node';

const RecursiveTree = ({ root }) => {
    const { fs } = useContext(FileSystemContext);

    const { children } = useTree({ root });

    return (
        <>
            <Node id={root} />
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
