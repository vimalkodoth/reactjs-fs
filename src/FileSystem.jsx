import './styles.css';
import RecursiveTree from './RecursiveTree.jsx';
import Button from './Button.jsx';
import { useContext } from 'react';
import { FileSystemContext } from './FileSystemContext';

const FileSystem = ({ initData }) => {
    const root = 0;
    const { undoEntry, isUndo } = useContext(FileSystemContext);
    return (
        <div className="fileSystem">
            <ul>
                <div className="fs-button">
                    <Button
                        title="undo"
                        onClick={undoEntry}
                        disabled={!isUndo}
                    />
                </div>
                <RecursiveTree fileSystem={initData} root={root} />
            </ul>
        </div>
    );
};

export default FileSystem;
