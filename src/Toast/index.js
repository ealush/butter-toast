import React, { Component } from 'react';
import { getRenderable } from '../lib';
import { toastStyle } from './style';
import { isSticky, calcNextTimeout } from './helpers';

class Toast extends Component {

    state = {
        shown: false
    }

    createRef = (ref = { addEventListener: () => null }) => {
        this.toastRef = ref;
    }

    componentDidMount() {
        setTimeout(this.open);
    }

    componentWillUnmount() {
        this.clearTimeout();
    }

    open = () => this.setState({ isOpen: true }, this.toastDidOpen);

    startTimeout = () => {
        const { toast } = this.props;

        if (isSticky(toast)) {
            return;
        }

        const timeout = calcNextTimeout(this.remaining, toast.timeout);

        this.clearTimeout();
        this.timeout = setTimeout(this.close, timeout);
        this.ends = Date.now() + timeout;
        this.remaining = undefined;
    }

    clearTimeout = () => {
        if (isSticky(this.props.toast)) {
            return;
        }

        this.remaining = this.calcRemaining();
        clearTimeout(this.timeout);
    }

    calcRemaining = () => this.ends - Date.now();

    toastDidOpen() {
        const ref = this.toastRef;
        const {
            setHeight, toast
        } = this.props;

        setTimeout(() => {
            this.setState({
                shown: true
            }, () => {
                setHeight(toast.id, ref.clientHeight);
                this.startTimeout();
            });
        });
    }

    close = () => {

        if (this.state.removed) {
            return;
        }

        const toastRef = this.toastRef;
        this.clearTimeout();

        const remove = () => this.setState({isOpen: false}, this.props.remove);

        this.setState({ shown: false, removed: true }, () => {
            toastRef.addEventListener('transitionend', function cb(e) {
                if (e.target === toastRef) {
                    toastRef.removeEventListener(e.type, cb);
                    remove();
                }
            });
        });
    }

    get className() {
        return [
            'shown',
            'removed'
        ].reduce((className, current) => this.state[current]
            ? `${className} ${current}`
            : className, 'bt-toast');
    }

    get dismiss() {
        const { toast, dismiss } = this.props;
        if (typeof toast.dismiss === 'function') {
            return (e) => toast.dismiss(e, toast, dismiss)
        }
        return dismiss;
    }

    render() {
        const { dismiss, toast, pauseOnHover, position, ...props } = this.props;
        const { shown, removed } = this.state;

        return (
            <div ref={this.createRef}
                onMouseEnter={() => pauseOnHover && this.clearTimeout()}
                onMouseLeave={() => pauseOnHover && this.startTimeout()}
                style={toastStyle({shown, removed})}
                className={this.className}>
                {getRenderable(toast.content, {
                    toastId: toast.id,
                    dismiss: this.dismiss,
                    onClick: toast.onClick ? (e) => toast.onClick(e, toast, dismiss) : undefined,
                    calcRemaining: this.calcRemaining,
                    trayPosition: position,
                    ...props
                })}
            </div>
        );
    }
}

export default Toast;

Toast.defaultProps = {
    pauseOnHover: true,
    toast: {}
};
