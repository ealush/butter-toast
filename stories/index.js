import React from 'react'; // eslint-disable-line no-unused-vars
import { storiesOf } from '@kadira/storybook';
import { quotes, icons, images, rand } from './helpers';
import ButterToast from '../src';
import './style.scss';

function raise(options = {}) {
    const defaults = {
        content: (
            <div className="my-toast">
                {rand(quotes)}
                <i className={`fa ${rand(icons)}`}/>
            </div>
        ),
        toastTimeout: 5000
    };

    ButterToast.raise(Object.assign({}, defaults, options));
}

function raiseRandomTimeout() {
    raise({toastTimeout: (Math.round(Math.random()*7000) + 3000)});
}

function raiseSticky() {
    raise({
        sticky: true,
        dismissOnClick: true
    });
}

function raiseDismissOnClick() {
    raise({
        dismissOnClick: true
    });
}

function raiseLarge() {
    raise({
        content: (
            <figure className="toast-large">
                <div className="image" style={{backgroundImage: `url('${rand(images)}')`}}/>
                <figcaption>
                    {rand(quotes)}
                </figcaption>
            </figure>
        )
    });
}

storiesOf('Toast', module) // eslint-disable-line no-undef
    .add('bottom-left', () => (
        <div>
            <ButterToast trayPosition="bottom-left"/>
            <a href="#!" onClick={raise}>Raise a toast!</a>
        </div>
    ))
    .add('bottom-right: large', () => (
        <div>
            <ButterToast toastType="large" toastMargin="10" trayPosition="bottom-right"/>
            <a href="#!" onClick={raiseLarge}>Raise a toast!</a>
        </div>
    ))
    .add('top-right: Dismiss on Click', () => (
        <div>
            <ButterToast trayPosition="top-right"/>
            <a href="#!" onClick={raiseDismissOnClick}>Raise a toast!</a>
        </div>
    ))
    .add('top-left', () => (
        <div>
            <ButterToast trayPosition="top-left"/>
            <a href="#!" onClick={raise}>Raise a toast!</a>
        </div>
    ))
    .add('bottom-center', () => (
        <div>
            <ButterToast trayPosition="bottom-center"/>
            <a href="#!" onClick={raise}>Raise a toast!</a>
        </div>
    ))
    .add('top-center: Sticky', () => (
        <div>
            <ButterToast trayPosition="top-center"/>
            <a href="#!" onClick={raiseSticky}>Sticky Toast!</a>
        </div>
    ))
    .add('bottom-right: Random Timeout', () => (
        <div>
            <ButterToast/>
            <a href="#!" onClick={raiseRandomTimeout}>Raise a toast!</a>
        </div>
    ));