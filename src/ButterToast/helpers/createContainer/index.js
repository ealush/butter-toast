
import renderAt from '../renderAt';
import getClassName from '../getClassName';
import {BUTTER_TOAST_NAMESPACE} from '../../constants';
import styles from '../styles';

const generateId = (position = {}, namespace = '') => (
    [BUTTER_TOAST_NAMESPACE, ...Object.values(position), namespace].filter(Boolean).join('_')
);

const createContainer = (options = {}) => {

    const {
        position,
        namespace,
        timeout,
        spacing,
        className,
        parentNode = document.body,
        createTrayRef
    } = options;

    const id = generateId(position, namespace);

    let container = parentNode.querySelector(`#${id}`);

    if (!container) {
        container = document.createElement('aside');
        container.setAttribute('id', id);
        parentNode.appendChild(container);

        renderAt(
            container,
            options,
            id
        );
    }

    const style = styles(position, spacing);
    container.setAttribute('class', getClassName({className, namespace }));
    Object.assign(container.style, style);

    return [container, id];
};

export default createContainer;