import React from 'react';
import wrap from '../../wrap';
import PropTypes from 'prop-types';
import './style.scss';

function Fresh({ message, title, theme='dark', icon, picture, dismiss, noClose }) {
    const iconClass = icon ? `fa fa-${icon}` : '',
        noIconClass = iconClass === '' ? ' no-icon' : '',
        pictureStyle = picture ? { backgroundImage: `url('${picture}')`} : { display: 'none' };

    return (
        <div className={`cinnamon-sugar-fresh ${theme}${noIconClass}`}>
            <figure style={pictureStyle}/>
            { title && <div className="title">{title}</div> }
            { message && <div className="message">{message}</div> }
            {!noClose && <a href="#!"
                onClick={dismiss}
                className="btn-dismiss">&times;</a>}
            <aside className={iconClass}/>
        </div>
    );
}

Fresh.propTypes = {
    message: PropTypes.any,
    title: PropTypes.any,
    theme: PropTypes.string,
    picture: PropTypes.string,
    icon: PropTypes.string,
    dismiss: PropTypes.func,
    noClose: PropTypes.bool
};

export default wrap(Fresh);