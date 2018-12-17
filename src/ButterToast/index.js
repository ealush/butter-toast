import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { generateId } from '../lib';
import {createContainer, renderAt, unmountTray, getClassName, createTrayRef, commandTrays} from './helpers';
import {POS_TOP, POS_BOTTOM, POS_LEFT, POS_RIGHT, POS_CENTER, BUTTER_TOAST_NAMESPACE} from './constants';
import Tray from '../Tray';
class ButterToast extends Component {

    static raise(payload = {}) {
        const id = generateId();
        commandTrays('push', { id, ...payload });
        return id;
    }

    static show(payload = {}, trayId) {
        const btNamespace = Symbol.for(BUTTER_TOAST_NAMESPACE);

        const id = generateId();
        let enrichedPayload = {...payload, id};

        if (!trayId) {
            enrichedPayload = {...ButterToast.defaultProps, ...payload};
            const [root, trayId] = createContainer(enriched);
        }

        window[btNamespace][trayId].push(enrichedPayload);
        return id;
    }

    static dismiss(id) { commandTrays('dismiss', id); }
    static dismissAll(id) { commandTrays('dismissAll'); }

    raise = (payload = {}) => {
        if (!this.id) {return;}

        return ButterToast.show(payload, this.id);
    }

    dismiss = (id) => this.tray.push(id);
    dismissAll = () => this.tray.dismissAll();

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
