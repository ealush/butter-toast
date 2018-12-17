import {BUTTER_TOAST_NAMESPACE} from '../../constants';

const commandTrays = (action, ...args) => {
    const btNamespace = Symbol.for(BUTTER_TOAST_NAMESPACE);

    setTimeout(() => {
        for (const tray in window[btNamespace]) {
            const currentTray = window[btNamespace][tray];
            if (window[btNamespace][tray] && window[btNamespace][tray][action]) {
                window[btNamespace][tray][action](...args);
            }
        }
    });
}

export default commandTrays;