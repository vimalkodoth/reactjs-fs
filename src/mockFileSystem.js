const fileSystem = {
    0: {
        type: '__folder__',
        name: 'root',
        path: '/',
        parentPath: null,
        parentID: null,
        children: [1, 2, 3, 4],
    },
    1: {
        type: '__folder__',
        name: 'apps',
        parentID: 0,
        children: [],
    },
    2: {
        type: '__folder__',
        name: 'myfiles',
        parentID: 0,
        children: [],
    },
    3: {
        type: '__folder__',
        name: 'docs',
        parentID: 0,
        children: [5, 6],
    },
    4: {
        type: '__file__',
        name: 'a.txt',
        parentID: 0,
    },

    5: {
        type: '__file__',
        name: 'c.txt',
        parentID: 3,
    },
    6: {
        type: '__file__',
        name: 'd.txt',
        parentID: 3,
    },
};

export const getFileSystem = () => {
    return fileSystem;
};
