import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function ActionWrapper({children, style, toast, onMouseEnter, onMouseLeave}) {
    const onClick = toast.payload.onClick;

    const className = `action-wrapper ${toast.shown ? ' shown' : ''}`;

    let url = toast.payload.url;

    if (!onClick && !url) {
        return (<span id={toast.toastId}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={style}
            className={className}>
            {children}
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
            className={className}>
            {children}
        </a>
    );
}

ActionWrapper.propTypes = {
    children: PropTypes.element.isRequired,
    toast: PropTypes.object.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired
};

export default ActionWrapper;