import React from 'react';
import wrap from '../../wrap';
import PropTypes from 'prop-types';
import './style.scss';

function Fresh({ message, title, theme='dark', icon, image, dismiss, noClose }) {
    const iconClass = icon ? `fa fa-${icon}` : '',
        noIconClass = iconClass === '' ? ' no-icon' : '',
        imageStyle = image ? { backgroundImage: `url('${image}')`} : { display: 'none' };

    return (
        <div className={`cinnamon-sugar-Fresh ${theme}${noIconClass}`}>
            <figure style={imageStyle}/>
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
    image: PropTypes.string,
    icon: PropTypes.string,
    dismiss: PropTypes.func,
    noClose: PropTypes.bool
};

export default wrap(Fresh);