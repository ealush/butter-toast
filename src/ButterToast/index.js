import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { generateId } from '../lib';
import {createContainer, renderAt, unmountTray, dispatchCustomEvent, getClassName, createTrayRef} from './helpers';
import { POS_TOP, POS_BOTTOM, POS_LEFT, POS_RIGHT, POS_CENTER } from './constants';
import Tray from '../Tray';
class ButterToast extends Component {

    static raise(payload = {}) {
        const id = generateId();
        dispatchCustomEvent({ id, ...payload });
        return id;
    }

    static show(payload = {}) {
        const enriched = {...ButterToast.defaultProps, ...payload};
        const id = generateId();
        const [tray, trayId] = createContainer(enriched);
        window._btTrays[trayId].push({id, ...enriched});
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

        [this.root, this.id] = createContainer({
            ...this.props
        });
    }

    componentWillUnmount() {
        unmountTray({id: this.id, root: this.root});
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
