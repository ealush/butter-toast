import React from 'react';
import PropTypes from 'prop-types';
import Div, { SCHEME_GREY, SCHEME_RED, SCHEME_ORANGE, SCHEME_PURPLE, SCHEME_GREEN, SCHEME_BLUE } from './style';
import { getRenderable } from '../../lib';

function Crisp({ dismissible, className, dismiss, icon, title, content, toastId, scheme, onClick, trayPosition }) {

    return (
        <Div className={`toast-crisp ${className}`} hasIcon={!!icon} scheme={scheme} hasOnClick={!!onClick} dismissible={dismissible} trayPosition={trayPosition}>
            <span onClick={onClick}>
                { icon && <div className="bt-icon">{getRenderable(icon)}</div> }
                { title && <strong className="title">{getRenderable(title)}</strong> }
                {content && <div className="content">{getRenderable(content)}</div>}
            </span>
            {dismissible && <button onClick={dismiss} className="btn-dismiss">&times;</button>}
        </Div>
    );
}

Crisp.SCHEME_GREY = SCHEME_GREY;
Crisp.SCHEME_RED = SCHEME_RED;
Crisp.SCHEME_ORANGE = SCHEME_ORANGE;
Crisp.SCHEME_PURPLE = SCHEME_PURPLE;
Crisp.SCHEME_GREEN = SCHEME_GREEN;
Crisp.SCHEME_BLUE = SCHEME_BLUE;

export default Crisp;

Crisp.prototypes = {
    content: PropTypes.node,
    icon: PropTypes.node,
    className: PropTypes.string,
    scheme: PropTypes.oneOf([SCHEME_GREY, SCHEME_RED, SCHEME_ORANGE, SCHEME_PURPLE, SCHEME_GREEN, SCHEME_BLUE]),
    toastId: PropTypes.string,
    dismiss: PropTypes.func,
    onClick: PropTypes.func,
    dismissible: PropTypes.bool
};

Crisp.defaultProps = {
    dismissible: true,
    scheme: SCHEME_GREY,
    title: null,
    content: null,
    icon: null,
    className: ''
};
