import { BUTTER_TOAST_NAMESPACE } from '../../constants';

const createTrayRef = (ref, id) => {
    const btNamespace = Symbol.for(BUTTER_TOAST_NAMESPACE);

    window[btNamespace] = window[btNamespace] || {};

    if (!ref) {
        return;
    }

    window[btNamespace][ref.id] = ref;
}

export default createTrayRef;