import {BUTTER_TOAST_NAMESPACE} from '../../constants';

const trayDo = (action, trayId, ...args) => {
    const currentTray = window[btNamespace][tray];

    if (currentTray && currentTray[action]) {
        currentTray[action](...args);
    }
}

const commandTrays = (action, trayId, ...args) => {
    setTimeout(() => {
        if (trayId) {
            return trayDo(action, trayId, ...args);
        }

        for (const tray in window[btNamespace]) {
            trayDo(action, tray, ...args);
        }
    });
}

export default commandTrays;