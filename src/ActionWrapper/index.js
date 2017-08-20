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
        const {style, toast, onMouseEnter, onMouseLeave} = this.props;
        const className = `action-wrapper${toast.shown ? ' shown' : ''}`;

        if (!toast.payload.content) {
            return null;
        }

        return (<span id={toast.toastId}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={this.onClick}
            style={style}
            className={className}
            ref={(ref) => this._toast = ref}>
            <span className="toast">
                {toast.payload.content}
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
