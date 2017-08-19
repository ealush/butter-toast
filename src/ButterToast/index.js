import React, { Component } from 'react';
import ActionWrapper from '../ActionWrapper';
import { generateClassName, generateToastId } from './helpers';
import linear from 'linear-debounce';
import defaults from './defaults';
import Toast from '../Toast';
import './style.scss';

class ButterToast extends Component {
    static pop(payload) {
        const toast = new CustomEvent('ButterToast', {
            detail: payload
        });

        return window.dispatchEvent(toast);
    }

    constructor(props) {
        super(props);

        this.state = {
            toasts: []
        };

        this.config = Object.assign({}, defaults, props);
        this.onButterToast = this.onButterToast.bind(this);

        this.position = {
            isBottom: this.config.trayPosition.indexOf('bottom') > -1,
            isLeft: this.config.trayPosition.indexOf('-left') > -1,
            isRight: this.config.trayPosition.indexOf('-right') > -1,
            isCenter: this.config.trayPosition.indexOf('-center') > -1
        };
    }

    componentDidMount() {
        window.addEventListener('ButterToast', this.onButterToast);
    }

    componentWillUnmount() {
        window.addEventListener('ButterToast', this.onButterToast);
    }

    showToast(toastId) {
        this.setState((prevState) => {
            const nextState = Object.assign({}, prevState);
            const index = nextState.toasts.findIndex((toast) => toast.toastId === toastId);
            nextState.toasts[index].shown = true;
            return nextState;
        });
    }

    hideToast(toastId) {
        this.setState((prevState) => {
            const nextState = Object.assign({}, prevState);
            const index = nextState.toasts.findIndex((toast) => toast.toastId === toastId);
            nextState.toasts[index].shown = false;
            return nextState;
        });
    }

    onButterToast(e) {
        const payload = e.detail;
        if (!payload || (payload.name && payload.name !== this.config.name)) {
            return;
        }

        const timeout = parseInt(payload.toastTimeout, 10) || parseInt(this.config.toastTimeout, 10),
            hideOn = timeout - 300,
            toastId = generateToastId();
        linear({
            '0': () => {
                this.setState((prevState) => ({toasts: prevState.toasts.concat([{ toastId, payload }])}));
            },
            '50': () => this.showToast(toastId),
            [hideOn.toString()]: () => this.hideToast(toastId),
            [timeout.toString()]: () => {
                this.setState((prevState) => ({ toasts: prevState.toasts.filter((toast) => toast.toastId !== toastId)}));
            }
        })();
    }

    render() {
        const className = generateClassName(this.config),
            toasts = this.state.toasts,
            type = this.config.toastType,
            position = this.position;

        return (
            <aside className={className}>
                <div className="wrapper">
                    {toasts.map((toast, index) => (
                        <ActionWrapper key={toast.toastId} toast={toast}>
                            <Toast index={index}
                                config={this.config}
                                position={position}
                                type={type}
                                toast={toast}/>
                        </ActionWrapper>))}
                </div>
            </aside>
        );
    }
}

export default ButterToast;