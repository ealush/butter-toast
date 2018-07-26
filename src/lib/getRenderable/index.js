import React from 'react';

const FALLBACK_VALUE = null;

const getRenderable = (child, props = {}) => {

    // React Elements
    if (React.isValidElement(child)) {
        return React.cloneElement(child, props);
    }

    // Stateless function constructors
    if (typeof child === 'function') {
        return child(props);
    }

    // Falsey values are not valid React nodes
    if (child === null || ['undefined', 'boolean'].includes(typeof child)) {
        return FALLBACK_VALUE;
    }

    // All other valid React nodes (strings, integers, etc.)
    return child;
};

export default getRenderable;
