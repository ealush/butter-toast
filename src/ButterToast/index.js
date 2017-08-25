import 'babel-polyfill';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import defaults from './defaults';
import { generateClassName, findByClassName } from './helpers';
import ButterToastTray from '../ButterToastTray';

class ButterToast extends Component {

    static raise(payload) {
        const toast = new CustomEvent('ButterToast', {
            detail: payload
        });

        return window.dispatchEvent(toast);
    }

    static unmount(props, _tray) {
        const className = generateClassName(props),
            root = findByClassName(className);

        if (_tray) {
            window.removeEventListener('ButterToast', _tray.onButterToast);
        }

        ReactDOM.unmountComponentAtNode(root);
        root.parentNode.removeChild(root);
    }

    constructor(props) {
        super(props);

        this.config = Object.assign({}, defaults, props);
        this.className = generateClassName(this.config);
        this.theme = '';
        if (this.config.theme) {
            this.theme = ` bt-theme-${this.config.theme}`;
        }
    }

    componentDidMount() {

        if (this.props.renderInContext) {
            return;
        }

        if (findByClassName(this.className)) {
            return;
        }

        const className = `${this.className}${this.theme}`;

        const root = document.createElement('aside');
        root.setAttribute('class', className);
        document.body.appendChild(root);

        ReactDOM.render(<ButterToastTray ref={(tray) => this._tray = tray} {...this.config}/>, root);
    }

    componentWillUnmount() {
        ButterToast.unmount(this.config, this._tray);
    }

    render() {
        if (this.props.renderInContext) {
            const className = `${this.className}${this.theme}`;

            return (
                <aside className={className}>
                    <ButterToastTray ref={(tray) => this._tray = tray} {...this.config}/>
                </aside>
            );
        } else {
            return null;
        }
    }
}

ButterToast.propTypes = {
    renderInContext: PropTypes.bool
};

export default ButterToast;
