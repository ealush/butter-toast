import {CUSTOM_EVENT_NAME} from '../../constants';

const dispatchCustomEvent = (payload) => {
    let event;
    const detail = Object.assign({ namespace: '' }, payload);

    if (typeof window.CustomEvent === 'function') {
        event = new CustomEvent(CUSTOM_EVENT_NAME, { detail });
    } else {
        event = document.createEvent('CustomEvent');
        event.initCustomEvent(CUSTOM_EVENT_NAME, false, false, detail);
    }

    window.dispatchEvent(event);
}

export default dispatchCustomEvent;