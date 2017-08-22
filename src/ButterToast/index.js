import 'babel-polyfill';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import defaults from './defaults';
import { generateClassName } from './helpers';
import ButterToastTray from '../ButterToastTray';

class ButterToast extends Component {

    static raise(payload) {
        const toast = new CustomEvent('ButterToast', {
            detail: payload
        });

        return window.dispatchEvent(toast);
    }

    constructor(props) {
        super(props);

        this.config = Object.assign({}, defaults, props);
        this.className = generateClassName(this.config);
    }

    componentDidMount() {

        if (this.props.renderInContext) {
            return;
        }

        const qs = document.querySelector(`.${this.className.replace(/ /g, '.')}`);
        let root;

        if (qs) {
            root = qs;
        } else {
            root = document.createElement('aside');
            root.setAttribute('class', this.className);
            document.body.appendChild(root);
        }

        ReactDOM.render(<ButterToastTray {...this.config}/>, root);
    }

    render() {
        if (this.props.renderInContext) {
            return (
                <aside className={this.className}>
                    <ButterToastTray {...this.config}/>
                </aside>
            );
        } else {
            return null;
        }
    }
}

export default ButterToast;
