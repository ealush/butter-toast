import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class ActionWrapper extends Component {
    constructor() {
        super();

        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        const height = this._toast.clientHeight;
        this.props.setToastHeight(this.props.toast.toastId, height);
    }

    onClick() {
        const toast = this.props.toast;
        if (toast.payload.dismissOnClick) {
            this.props.triggerDismiss(toast.toastId, true);
        }
    }

    render() {
        let Content;
        const {style, toast, onMouseEnter, onMouseLeave, triggerDismiss} = this.props;
        const className = `action-wrapper${toast.shown ? ' shown' : ''}`,
            payload = toast.payload,
            toastId = toast.toastId,
            dismiss = () => triggerDismiss(toastId, true);

        if (!toast.payload.content) {
            return null;
        } else if (typeof toast.payload.content === 'function') {
            Content = toast.payload.content;
        } else {
            Content = () => toast.payload.content;
        }

        return (<span id={toastId}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={this.onClick}
            style={style}
            className={className}
            ref={(ref) => this._toast = ref}>
            <span className="toast">
                <Content toastId={toastId} dismiss={dismiss} name={payload.name} toastTimeout={payload.toastTimeout}/>
            </span>
        </span>);
    }
}

ActionWrapper.propTypes = {
    setToastHeight: PropTypes.func.isRequired,
    toast: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
    triggerDismiss: PropTypes.func.isRequired
};

export default ActionWrapper;
