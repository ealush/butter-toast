import React from 'react';
import toasts from './toasts';
import defaults from '../ButterToast/defaults';

function Toast({type, ...props}) {

    if (!toasts.hasOwnProperty(type)) {
        type = defaults.toastType;
    }

    const ToastFunction = toasts[type];

    return <ToastFunction {...props}/>;

}

export default Toast;