import { useContext } from 'react';
import FileSystem from './FileSystem.jsx';
import { FileSystemContext } from './FileSystemContext.js';

const App = () => {
    const { fs } = useContext(FileSystemContext);
    return <FileSystem initData={fs} />;
};

export default App;
