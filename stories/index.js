import React from 'react'; // eslint-disable-line no-unused-vars
import { storiesOf } from '@kadira/storybook';
import { quotes, icons, images, rand } from './helpers';
import ButterToast from '../src/ButterToast';
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
    raise({toastTimeout: (Math.round(Math.random()*7000) + 3000), name: 'slim t6'});
}

function raiseSticky() {
    raise({
        sticky: true,
        dismissOnClick: true,
        name: 'slim t5'
    });
}

function raiseDismissOnClick() {
    raise({
        dismissOnClick: true,
        name: 'slim t2'
    });
}

function raiseLarge() {
    const bg = rand(images),
        text = rand(quotes),
        content = ({dismiss}) => (
            <figure className="toast-large">
                <a href="#!" className="btn-dismiss" onClick={dismiss}>&times;</a>
                <div className="image" style={{backgroundImage: `url('${bg}')`}}/>
                <figcaption>{text}</figcaption>
            </figure>
        );
    raise({ content, name: 'large' });
}

storiesOf('Toast', module) // eslint-disable-line no-undef
    .add('bottom-left', () => (
        <div>
            <ButterToast name="slim t1" trayPosition="bottom-left"/>
            <a href="#!" onClick={() => raise({name: 'slim t1'})}>Raise a toast!</a>
        </div>
    ))
    .add('bottom-right: large (children as a function)', () => (
        <div>
            <ButterToast name="large" toastMargin="10" trayPosition="bottom-right"/>
            <a href="#!" onClick={raiseLarge}>Raise a toast!</a>
        </div>
    ))
    .add('top-right: Dismiss on Click', () => (
        <div>
            <ButterToast name="slim t2" trayPosition="top-right"/>
            <a href="#!" onClick={raiseDismissOnClick}>Raise a toast!</a>
        </div>
    ))
    .add('top-left', () => (
        <div>
            <ButterToast name="slim t3" trayPosition="top-left"/>
            <a href="#!" onClick={() => raise({name: 'slim t3'})}>Raise a toast!</a>
        </div>
    ))
    .add('bottom-center', () => (
        <div>
            <ButterToast name="slim t4" trayPosition="bottom-center"/>
            <a href="#!" onClick={() => raise({name: 'slim t4'})}>Raise a toast!</a>
        </div>
    ))
    .add('top-center: Sticky', () => (
        <div>
            <ButterToast name="slim t5" theme="cinnamon-sugar" trayPosition="top-center"/>
            <a href="#!" onClick={raiseSticky}>Sticky Toast!</a>
        </div>
    ))
    .add('bottom-right: Random Timeout', () => (
        <div>
            <ButterToast name="slim t6" renderInContext={true}/>
            <a href="#!" onClick={raiseRandomTimeout}>Raise a toast!</a>
        </div>
    ));