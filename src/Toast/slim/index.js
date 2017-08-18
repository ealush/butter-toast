import React from 'react';
import { generateStyle } from '../helpers';
import PropTypes from 'prop-types';
import './style.scss';

function slim({ index, config, toast, position }) {
    const style = generateStyle(config, index, position);

    const className = `toast${toast.shown ? ' shown' : ''}`;

    return (
        <div id={toast.toastId} className={className} style={style}>
            {toast.payload.text}
        </div>
    );
}

slim.propTypes = {
    index: PropTypes.number.isRequired,
    config: PropTypes.object.isRequired,
    toast: PropTypes.object.isRequired,
    position: PropTypes.object
};

export default slim;