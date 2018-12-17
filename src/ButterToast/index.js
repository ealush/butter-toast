import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { generateId } from '../lib';
import { createContainer,
    renderAt,
    unmountTray,
    getClassName,
    createTrayRef,
    commandTrays
} from './helpers';
import {
    POS_TOP,
    POS_BOTTOM,
    POS_LEFT,
    POS_RIGHT,
    POS_CENTER,
    BUTTER_TOAST_NAMESPACE,
    METHOD_DISMISS,
    METHOD_DISMISS_ALL,
    METHOD_PUSH,
    METHOD_RAISE
} from './constants';
import Tray from '../Tray';
class ButterToast extends Component {

    static [METHOD_RAISE](payload = {}, trayId) {
        const id = generateId();
        commandTrays(METHOD_PUSH, trayId, { id, ...payload });
        return id;
    }

    static show(payload = {}, trayId) {
        let root;
        let enrichedPayload = payload;

        if (!trayId && !payload.namespace) {
            enrichedPayload = {...ButterToast.defaultProps, ...payload};
            [root, trayId] = createContainer(enrichedPayload);
        }

        return ButterToast[METHOD_RAISE](enrichedPayload, trayId);
    }

    static dismiss(id, trayId) { commandTrays(METHOD_DISMISS, trayId, id); }
    static dismissAll(trayId) { commandTrays(METHOD_DISMISS_ALL, trayId); }

    [METHOD_RAISE] = (payload = {}) => {
        if (!this.id) {return;}

        return ButterToast[METHOD_RAISE](payload, this.id);
    }

    [METHOD_DISMISS] = (id) => ButterToast.dismiss(id, this.id);
    [METHOD_DISMISS_ALL] = () => ButterToast.dismissAll(this.id);

    componentDidMount() {
        if (this.props.renderInContext) {
            return;
        }

        const btNamespace = Symbol.for(BUTTER_TOAST_NAMESPACE);

        [this.root, this.id] = createContainer({
            ...this.props
        });
    }

    componentWillUnmount() {
        unmountTray(this.root, this.id);
        delete this.root;
    }

    render() {
        const {
            renderInContext,
            timeout,
            spacing,
            namespace,
            position,
            className
        } = this.props;

        if (renderInContext) {

            return (
                <aside className={getClassName({className, namespace})}>
                    <Tray ref={createTrayRef}
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
    spacing: PropTypes.number,
    parentNode: PropTypes.instanceOf(Element)
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
