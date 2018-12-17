import {BUTTER_TOAST_NAMESPACE} from '../../constants';

const trayDo = (action, btNamespace, trayId, ...args) => {
    const currentTray = window[btNamespace][trayId];

    if (currentTray && currentTray[action]) {
        currentTray[action](...args);
    }
}

const commandTrays = (action, trayId, ...args) => {
    const btNamespace = Symbol.for(BUTTER_TOAST_NAMESPACE);

    setTimeout(() => {
        if (trayId) {
            return trayDo(action, btNamespace, trayId, ...args);
        }

        for (const tray in window[btNamespace]) {
            trayDo(action, btNamespace, tray, ...args);
        }
    });
}

export default commandTrays;