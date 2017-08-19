import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function ActionWrapper({children, style, toast}) {
    const {
        onClick, onMouseEnter, onMouseLeave
    } = toast.payload;

    const className = `action-wrapper ${toast.shown ? ' shown' : ''}`;

    let url = toast.payload.url;

    if (!onClick && !url) {
        return (<span onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={style}
            className={className}>
            {children}
        </span>);
    }

    url = url || '#!';

    return (
        <a href={url}
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
    toast: PropTypes.object.isRequired
};

export default ActionWrapper;