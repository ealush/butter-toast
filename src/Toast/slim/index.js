import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Slim extends Component {

    componentDidMount() {
        const height = this._toast.clientHeight;
        this.props.setToastHeight(this.props.toast.toastId, height);
    }

    render() {
        const { toast } = this.props;

        return (
            <div id={toast.toastId}
                className="toast"
                ref={(toast) => {this._toast = toast;}}>
                {toast.payload.text}
            </div>
        );
    }
}

Slim.propTypes = {
    toast: PropTypes.object.isRequired,
    setToastHeight: PropTypes.func.isRequired
};

export default Slim;