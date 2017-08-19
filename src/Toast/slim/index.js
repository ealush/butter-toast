import React, { Component } from 'react';
import { generateStyle } from '../helpers';
import PropTypes from 'prop-types';
import './style.scss';

class Slim extends Component {
    render() {
        const { index, config, toast, position } = this.props;
        const style = generateStyle(config, index, position);
        const className = `toast${toast.shown ? ' shown' : ''}`;

        return (
            <div id={toast.toastId}
                className={className}
                style={style}
                ref={(toast) => {this._toast = toast;}}>
                {toast.payload.text}
            </div>
        );
    }
}

Slim.propTypes = {
    index: PropTypes.number.isRequired,
    config: PropTypes.object.isRequired,
    toast: PropTypes.object.isRequired,
    position: PropTypes.object
};

export default Slim;