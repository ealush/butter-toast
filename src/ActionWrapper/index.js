import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class ActionWrapper extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);

        const content = props.toast.payload.content;

        if (!content) {
            this.content = null;
        } else if (typeof content === 'function') {
            this.content = content;
        } else {
            this.content = () => content;
        }
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

        if (!this.content) {
            return null;
        }

        const Content = this.content,
            {style, toast, onMouseEnter, onMouseLeave, triggerDismiss} = this.props,
            payload = toast.payload,
            toastId = toast.toastId,
            className = `action-wrapper${toast.shown ? ' shown' : ''} ${payload.wrapperClass ? payload.wrapperClass : ''}`,
            dismiss = () => triggerDismiss(toastId, true);

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
