import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { generateId } from '../lib';
import styles, { POS_TOP, POS_BOTTOM, POS_LEFT, POS_RIGHT, POS_CENTER } from './styles';
import Tray from '../Tray';
export const CUSTOM_EVENT_NAME = 'ButterToast';

function dispatchCustomEvent(payload) {
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

class ButterToast extends Component {

    static raise(payload = {}) {
        const id = generateId();
        dispatchCustomEvent({ id, ...payload });
        return id;
    }

    static dismiss(id) { dispatchCustomEvent({ dismissBy: id }); }
    static dismissAll(id) { dispatchCustomEvent({ dismissBy: 'all' }); }

    raise = (payload = {}) => {
        const id = generateId();
        this.tray.push({ id, ...payload });
        return id;
    }

    dismiss = (id) => this.tray.push(id);
    dismissAll = () => this.tray.dismissAll();

    componentDidMount() {
        if (this.props.renderInContext) {
            return;
        }

        const {
            position,
            timeout,
            spacing,
            namespace,
            style
        } = this.props;

        const outputStyle = styles(position, spacing);
        this.root = document.createElement('aside');
        this.root.setAttribute('class', this.className);
        Object.assign(this.root.style, outputStyle, style);
        document.body.appendChild(this.root);

        ReactDOM.render(<Tray ref={this.createTrayRef}
            namespace={namespace}
            spacing={spacing}
            timeout={timeout}
            position={position}/>,
        this.root);
    }

    componentWillUnmount() {
        if (!this.root) {
            return;
        }

        delete window._btTrays[this.id];
        ReactDOM.unmountComponentAtNode(this.root);
        this.root.parentNode.removeChild(this.root);
        delete this.root;
    }

    createTrayRef = (ref) => {
        window._btTrays = window._btTrays || {};

        if (!ref) {
            return;
        }

        this.id = ref.id;
        this.tray = ref;

        window._btTrays[ref.id] = ref;
    }

    get className() {
        const {
            className,
            namespace
        } = this.props;

        return [className, namespace, 'butter-toast'].filter(Boolean).join(' ');
    }

    render() {
        const {
            renderInContext,
            timeout,
            spacing,
            namespace,
            position,
            style
        } = this.props;

        if (renderInContext) {

            return (
                <aside className={this.className} style={style}>
                    <Tray ref={this.createTrayRef}
                        position={position}
                        namespace={namespace}
                        spacing={spacing}
                        timeout={timeout}/>
                </aside>
            );
        } else {
            return null;
        }
    }
}

ButterToast.propTypes = {
    renderInContext: PropTypes.bool,
    className: PropTypes.string,
    namespace: PropTypes.string,
    position: PropTypes.shape({
        vertical: PropTypes.oneOf([POS_TOP, POS_BOTTOM]),
        horizontal: PropTypes.oneOf([POS_LEFT, POS_RIGHT, POS_CENTER])
    }),
    timout: PropTypes.number,
    spacing: PropTypes.number
};

ButterToast.defaultProps = {
    className: '',
    namespace: '',
    position: {
        vertical: POS_TOP,
        horizontal: POS_RIGHT
    },
    timeout: 6000,
    spacing: 10
};

export default ButterToast;

export {
    POS_TOP,
    POS_BOTTOM,
    POS_LEFT,
    POS_RIGHT,
    POS_CENTER
};
