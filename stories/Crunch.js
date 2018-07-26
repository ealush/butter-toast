import React from 'react';
import { storiesOf } from '@storybook/react';
import ButterToast from '../src';
import { POS_RIGHT, POS_CENTER, POS_LEFT, POS_TOP, POS_BOTTOM } from '../src/ButterToast/styles';
import { start, dismissAll } from './tools.js';

storiesOf('Kind::crunch', module)
    .add('Red - top/center', () => {
        start({ kind: 'crunch', scheme: 'red' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Orange - bottom/center', () => {
        start({ kind: 'crunch', scheme: 'orange' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Red - top/left', () => {
        start({ kind: 'crunch', scheme: 'red' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_LEFT }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Green - bottom/left', () => {
        start({ kind: 'crunch', scheme: 'green' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_LEFT }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Blue - top/right', () => {
        start({ kind: 'crunch', scheme: 'blue' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_RIGHT }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Grey - bottom/right', () => {
        start({ kind: 'crunch', scheme: 'grey' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_RIGHT }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    });
storiesOf('Kind::crunch::With Icon', module)
    .add('Red', () => {
        start({ kind: 'crunch', scheme: 'red', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Orange', () => {
        start({ kind: 'crunch', scheme: 'orange', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Green', () => {
        start({ kind: 'crunch', scheme: 'green', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Blue', () => {
        start({ kind: 'crunch', scheme: 'blue', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Grey', () => {
        start({ kind: 'crunch', scheme: 'grey', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    });
storiesOf('Kind::crunch::Non dismissible', module)
    .add('Red', () => {
        start({ kind: 'crunch', scheme: 'red', icon: true, dismissible: false });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Orange', () => {
        start({ kind: 'crunch', scheme: 'orange', icon: true, dismissible: false });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Green', () => {
        start({ kind: 'crunch', scheme: 'green', icon: true, dismissible: false });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Blue', () => {
        start({ kind: 'crunch', scheme: 'blue', icon: true, dismissible: false });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Grey', () => {
        start({ kind: 'crunch', scheme: 'grey', icon: true, dismissible: false });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    });
storiesOf('Kind::crunch::Sticky', module)
    .add('Red', () => {
        start({ kind: 'crunch', scheme: 'red', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Orange', () => {
        start({ kind: 'crunch', scheme: 'orange', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Green', () => {
        start({ kind: 'crunch', scheme: 'green', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Blue', () => {
        start({ kind: 'crunch', scheme: 'blue', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Grey', () => {
        start({ kind: 'crunch', scheme: 'grey', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    });
