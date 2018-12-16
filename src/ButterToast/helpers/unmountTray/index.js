import ReactDOM from 'react-dom';

const unmountTray = ({ id, root }) => {
    if (!root) {
        return;
    }

    delete window._btTrays[id];
    ReactDOM.unmountComponentAtNode(root);
    root.parentNode.removeChild(root);
}

export default unmountTray;