import React from 'react';
import wrap from '../../wrap';
import PropTypes from 'prop-types';
import './style.scss';

function Slim({ message, theme = 'dark' }) {
    return (
        <div className={`cinnamon-sugar-Slim ${theme}`}>
            {message}
        </div>
    );
}

Slim.propTypes = {
    message: PropTypes.string,
    theme: PropTypes.string
};

export default wrap(Slim);