import React, { Component } from 'react';
import { generateId } from '../lib';
import { Ul, Li } from './styles';
import { POS_BOTTOM } from '../ButterToast/constants';
import Toast from '../Toast';
import { BUTTER_TOAST_NAMESPACE, METHOD_DISMISS, METHOD_DISMISS_ALL, METHOD_PUSH } from '../ButterToast/constants';
import { ulStyle, liStyle } from './styles';

class Tray extends Component {

    constructor(props) {
        super(props);
        this.id = props.id || generateId('tray');
    }

    state = {
        toasts: []
    }

    toasts = {}

    createToastRef = (id, ref) => {
        if (!id) {
            return;
        }

        if (!ref) {
            delete this.toasts[id];
            return;
        }

        this.toasts[id] = ref;
    }

    [METHOD_PUSH] = (payload = {}) => {

        if (payload.namespace && payload.namespace !== this.props.namespace) {
            return;
        }

        const timeout = this.props.timeout;

        this.setState((prevState) => {
            const nextState = Object.assign({}, prevState);
            nextState.toasts = [{
                timeout, ...payload
            }].concat(nextState.toasts);
            return nextState;
        });
    }

    remove = (id) => {
        this.setState((prevState) => {
            const nextState = Object.assign({}, prevState);
            nextState.toasts = nextState.toasts.filter((toast) => toast.id !== id);
            return nextState;
        });
    }

    [METHOD_DISMISS] = (id) => {
        if (this.toasts[id] && this.toasts[id].close) {
            this.toasts[id].close();
        }
    }

    [METHOD_DISMISS_ALL] = () => {
        for (const toast in this.toasts) {
            this.dismiss(toast);
        }
    }

    setHeight = (id, height) => {
        this.setState((prevState) => {
            const nextState = Object.assign({}, prevState);
            const index = nextState.toasts.findIndex((toast) => toast.id === id);
            nextState.toasts[index].height = height;
            return nextState;
        });
    }

    render() {
        const { toasts } = this.state;
        const { position, spacing } = this.props;
        let offset = 0;

        return (
            <ul style={ulStyle}>
                {toasts.map((toast, index) => {
                    if (!toast) { return null; }

                    const height = toast.height || 0;
                    let currentOffset;

                    currentOffset = offset;
                    offset += height + spacing;

                    if (position && position.vertical === POS_BOTTOM) {
                        currentOffset = -currentOffset - height;
                    }

                    const style = liStyle({ offset: currentOffset, spacing, position, height: toast.height, index });

                    return (
                        <li key={toast.id} style={style}>
                            <Toast dismiss={() => this.dismiss(toast.id)}
                                remove={() => this.remove(toast.id)}
                                setHeight={this.setHeight}
                                position={position}
                                ref={(ref) => this.createToastRef(toast.id, ref)}
                                toast={toast}/>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default Tray;
