
import renderAt from '../renderAt';
import getClassName from '../getClassName';
import {BUTTER_TOAST_NAMESPACE} from '../../constants';
import styles from '../styles';

const generateId = (position = {}, namespace = '') => (
    [BUTTER_TOAST_NAMESPACE, ...Object.values(position), namespace].filter(Boolean).join('_')
);

const createContainer = ({parentNode, ...options} = {}) => {

    const {
        position,
        namespace,
        timeout,
        spacing,
        className,
        createTrayRef
    } = options;

    const id = generateId(position, namespace);
    const customContext = !!parentNode;
    const style = styles(position, spacing, customContext);

    parentNode = parentNode || document.body;

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

    container.setAttribute('class', getClassName({className, namespace }));
    Object.assign(container.style, style);

    return [container, id];
};

export default createContainer;