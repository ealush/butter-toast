import React from 'react';
import PropTypes from 'prop-types';
import Div, { SCHEME_GREY, SCHEME_RED, SCHEME_ORANGE, SCHEME_PURPLE, SCHEME_GREEN, SCHEME_BLUE } from './style';
import { getRenderable } from '../../lib';

function Crisp({ dismissible, dismiss, icon, title, content, toastId, scheme, onClick, trayPosition }) {

    return (
        <Div hasIcon={!!icon} scheme={scheme} hasOnClick={!!onClick} dismissible={dismissible} trayPosition={trayPosition}>
            <span onClick={onClick}>
                { icon && <div className="bt-icon">{getRenderable(icon)}</div> }
                { title && <strong className="title">{getRenderable(title)}</strong> }
                {content && <div className="content">{getRenderable(content)}</div>}
            </span>
            {dismissible && <button onClick={dismiss} className="btn-dismiss">&times;</button>}
        </Div>
    );
}

export default Crisp;
export { SCHEME_GREY, SCHEME_RED, SCHEME_ORANGE, SCHEME_PURPLE, SCHEME_GREEN, SCHEME_BLUE };

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
    icon: null
};
