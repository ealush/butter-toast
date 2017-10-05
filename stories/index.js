import React from 'react'; // eslint-disable-line no-unused-vars
import { storiesOf, action } from '@storybook/react';
import { quotes, icons, rand } from './helpers';
import ButterToast from '../src/ButterToast';
import cinnamon from 'cinnamon-sugar';
import './style.scss';

function raise(e, options = {}) {
    e.preventDefault();
    const toast = cinnamon({
        kind: 'crunch',
        title: rand(['WOW!', 'Awesome!', 'Whoopsie', 'Error']),
        message: rand(quotes),
        theme: rand(['red', 'blue', 'purple', 'orange', 'green', 'grey']),
        icon: rand(icons),
        onClick: action('clicked on toast')
    });

    ButterToast.raise(Object.assign({}, toast, options));
}

function raiseRandomTimeout(e) {
    raise(e, {toastTimeout: (Math.round(Math.random()*7000) + 3000), name: 'slim t6'});
}

function raiseSticky(e) {
    raise(e, {
        sticky: true,
        dismissOnClick: true,
        name: 'slim t5'
    });
}

function raiseDismissOnClick(e) {
    raise(e, {
        dismissOnClick: true,
        name: 'slim t2'
    });
}

storiesOf('Toast', module) // eslint-disable-line no-undef
    .add('bottom-left (pauseOnHover example)', () => (
        <div>
            <ButterToast name="slim t1" pauseOnHover trayPosition="bottom-left"/>
            <a href="#!" onClick={(e) => raise(e, {name: 'slim t1'})}>Raise a toast!</a>
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
            <a href="#!" onClick={(e) => raise(e, {name: 'slim t3'})}>Raise a toast!</a>
        </div>
    ))
    .add('bottom-center', () => (
        <div>
            <ButterToast name="slim t4" trayPosition="bottom-center"/>
            <a href="#!" onClick={(e) => raise(e, {name: 'slim t4'})}>Raise a toast!</a>
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