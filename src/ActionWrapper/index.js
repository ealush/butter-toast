import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class ActionWrapper extends Component {
    componentDidMount() {
        const height = this._toast.clientHeight;
        this.props.setToastHeight(this.props.toast.toastId, height);
    }

    render() {
        const {style, toast, onMouseEnter, onMouseLeave} = this.props;
        const onClick = toast.payload.onClick;
        const className = `action-wrapper ${toast.shown ? ' shown' : ''}`;

        let url = toast.payload.url;

        if (!onClick && !url) {
            return (<span id={toast.toastId}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                style={style}
                className={className}
                ref={(ref) => this._toast = ref}>
                <span className="toast">
                    {toast.payload.content}
                </span>
            </span>);
        }

        url = url || '#!';

        return (
            <a id={toast.toastId}
                href={url}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                style={style}
                className={className}
                ref={(ref) => this._toast = ref}>
                <span className="toast">
                    {toast.payload.content}
                </span>
            </a>
        );
    }
}

ActionWrapper.propTypes = {
    setToastHeight: PropTypes.func.isRequired,
    toast: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired
};

export default ActionWrapper;