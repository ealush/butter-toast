import React from 'react';
import PropTypes from 'prop-types';

function ActionWrapper({children, toast}) {
    const {
        onClick, onMouseEnter, onMouseLeave
    } = toast.payload;

    let url = toast.payload.url;

    if (!onClick && !url) {
        return (<span onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            {children}
        </span>);
    }

    url = url || '#!';

    return (
        <a href={url}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            {children}
        </a>
    );
}

ActionWrapper.propTypes = {
    children: PropTypes.element.isRequired,
    toast: PropTypes.object.isRequired
};

export default ActionWrapper;