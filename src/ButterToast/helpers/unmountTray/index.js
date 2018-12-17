import ReactDOM from 'react-dom';
import { BUTTER_TOAST_NAMESPACE } from '../../constants';

const unmountTray = (root, id) => {
    if (!root) {
        return;
    }

    const btNamespace = Symbol.for(BUTTER_TOAST_NAMESPACE);
    delete window[btNamespace][id];

    ReactDOM.unmountComponentAtNode(root);
    root.parentNode.removeChild(root);
}

export default unmountTray;