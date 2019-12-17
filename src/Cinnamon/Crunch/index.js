import React from 'react';
import PropTypes from 'prop-types';
import Div, { SCHEME_GREY, SCHEME_RED, SCHEME_ORANGE, SCHEME_GREEN, SCHEME_BLUE } from './style';
import { getRenderable } from '../../lib';

function Crunch({ dismissible, className, title, content, icon, dismiss, scheme, onClick, trayPosition }) {

    return (
        <Div className={`toast-crunch ${className}`} hasIcon={!!icon} scheme={scheme} hasOnClick={!!onClick} dismissible={dismissible} trayPosition={trayPosition}>
            {dismissible && <button onClick={dismiss} className="btn-dismiss">&times;</button>}
            <span onClick={onClick}>
                { icon && <div className="bt-icon">{getRenderable(icon)}</div> }
                { title && <strong className="title">{getRenderable(title)}</strong> }
                {content && <div className="content">{getRenderable(content)}</div>}
            </span>
        </Div>
    );
}

Crunch.SCHEME_GREY = SCHEME_GREY;
Crunch.SCHEME_RED = SCHEME_RED;
Crunch.SCHEME_ORANGE = SCHEME_ORANGE;
Crunch.SCHEME_GREEN = SCHEME_GREEN;
Crunch.SCHEME_BLUE = SCHEME_BLUE;

export default Crunch;

Crunch.prototypes = {
    content: PropTypes.node,
    icon: PropTypes.node,
    className: PropTypes.string,
    scheme: PropTypes.oneOf([SCHEME_GREY, SCHEME_RED, SCHEME_ORANGE, SCHEME_GREEN, SCHEME_BLUE]),
    toastId: PropTypes.string,
    dismiss: PropTypes.func,
    onClick: PropTypes.func,
    dismissible: PropTypes.bool
};

Crunch.defaultProps = {
    dismissible: true,
    scheme: SCHEME_GREY,
    title: null,
    content: null,
    icon: null,
    className: ''
};
