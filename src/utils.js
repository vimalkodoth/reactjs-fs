import { FILE } from './constants';

export const getDomTreeFromJSON = (fileSys, root) => {
    let domString = '';
    (function rec(root) {
        const type = fileSys[root].type;
        const children = fileSys[root]?.children?.slice(0);
        domString +=
            type === FILE
                ? `<li class="file" data-key={}>
                    <span>${fileSys[root]['name']}</span>
                </li>`
                : `<li class="folder">
                    <span>${fileSys[root]['name']}</span>
                </li>`;
        if (!children || !children.length) {
            return;
        }
        domString += '<ul>';
        while (children.length) {
            const child = children.shift();
            rec(child);
        }
        domString += '</ul>';
        return domString;
    })(root);

    return `<ul>${domString}</ul>`;
};
