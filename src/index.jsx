import ReactDOM from 'react-dom';
import App from './App.jsx';
import { FileSystemContextProvider } from './FileSystemContext.js';

ReactDOM.render(
    <FileSystemContextProvider>
        <App />
    </FileSystemContextProvider>,
    document.getElementById('root')
);
