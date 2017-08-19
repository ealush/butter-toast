import React, { Component } from 'react';
import ActionWrapper from '../ActionWrapper';
import { generateClassName, generateToastId, translateY } from './helpers';
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

        this.state = { toasts: [] };
        this.toasts = {};

        this.config = Object.assign({}, defaults, props);
        this.onButterToast = this.onButterToast.bind(this);
        this.setToastHeight = this.setToastHeight.bind(this);

        this.isBottom = this.config.trayPosition.indexOf('bottom') > -1;
    }

    componentDidMount() {
        window.addEventListener('ButterToast', this.onButterToast);
    }

    componentWillUnmount() {
        window.addEventListener('ButterToast', this.onButterToast);
    }

    setToastHeight(toastId, height = 0) {
        this.toasts[toastId] = this.toasts[toastId] || {};
        this.toasts[toastId].height = height;
    }

    showToast(toastId) {
        this.setState((prevState) => {
            const nextState = Object.assign({}, prevState);
            const index = nextState.toasts.findIndex((toast) => toast.toastId === toastId);

            if (index === -1) {
                return prevState;
            }

            nextState.toasts[index].shown = true;
            nextState.toasts[index].height = this.toasts[toastId].height;
            return nextState;
        });
    }

    hideToast(toastId) {
        this.setState((prevState) => {
            const nextState = Object.assign({}, prevState);
            const index = nextState.toasts.findIndex((toast) => toast.toastId === toastId);
            nextState.toasts[index].shown = false;
            //delete this.toasts[toastId];
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
            toastId = generateToastId(),
            height = 0;

        this.setToastHeight(toastId, height);

        linear({
            '0': () => {
                this.setState((prevState) => ({toasts: prevState.toasts.concat([{ toastId, payload, height }])}));
            },
            '50': () => this.showToast(toastId),
            [hideOn.toString()]: () => this.hideToast(toastId),
            [timeout.toString()]: () => {
                this.setState((prevState) => ({ toasts: prevState.toasts.filter((toast) => toast.toastId !== toastId)}));
            }
        })();
    }

    render() {
        const config = this.config,
            className = generateClassName(config),
            toasts = this.state.toasts,
            type = config.toastType,
            isBottom = this.isBottom;

        let heights = 0;

        return (
            <aside className={className}>
                <div className="wrapper">
                    {toasts.map((toast, index) => {
                        heights += (parseInt(toasts[index].height, 10) + parseInt(config.toastMargin, 10));
                        const style = translateY(isBottom ? -heights : heights);

                        return (<ActionWrapper key={toast.toastId}
                            toast={toast}
                            style={style}>
                            <Toast index={index}
                                setToastHeight={this.setToastHeight}
                                config={this.config}
                                type={type}
                                toast={toast}/>
                        </ActionWrapper>);
                    })}
                </div>
            </aside>
        );
    }
}

export default ButterToast;