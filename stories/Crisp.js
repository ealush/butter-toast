import React from 'react';
import { storiesOf } from '@storybook/react';
import ButterToast from '../src';
import { POS_RIGHT, POS_CENTER, POS_LEFT, POS_TOP, POS_BOTTOM } from '../src/ButterToast/styles';
import { start, dismissAll } from './tools.js';

storiesOf('Kind::Crisp', module)
    .add('Red - top/center', () => {
        start({ kind: 'crisp', scheme: 'red' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Orange - bottom/center', () => {
        start({ kind: 'crisp', scheme: 'orange' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Purple - top/left', () => {
        start({ kind: 'crisp', scheme: 'purple' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_LEFT }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Green - bottom/left', () => {
        start({ kind: 'crisp', scheme: 'green' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_LEFT }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Blue - top/right', () => {
        start({ kind: 'crisp', scheme: 'blue' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_RIGHT }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Grey - bottom/right', () => {
        start({ kind: 'crisp', scheme: 'grey' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_RIGHT }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    });
storiesOf('Kind::Crisp::With Icon', module)
    .add('Red', () => {
        start({ kind: 'crisp', scheme: 'red', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Orange', () => {
        start({ kind: 'crisp', scheme: 'orange', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Purple', () => {
        start({ kind: 'crisp', scheme: 'purple', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Green', () => {
        start({ kind: 'crisp', scheme: 'green', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Blue', () => {
        start({ kind: 'crisp', scheme: 'blue', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Grey', () => {
        start({ kind: 'crisp', scheme: 'grey', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    });
storiesOf('Kind::Crisp::Non dismissible', module)
    .add('Red', () => {
        start({ kind: 'crisp', scheme: 'red', icon: true, dismissible: false });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Orange', () => {
        start({ kind: 'crisp', scheme: 'orange', icon: true, dismissible: false });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Purple', () => {
        start({ kind: 'crisp', scheme: 'purple', icon: true, dismissible: false });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Green', () => {
        start({ kind: 'crisp', scheme: 'green', icon: true, dismissible: false });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Blue', () => {
        start({ kind: 'crisp', scheme: 'blue', icon: true, dismissible: false });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Grey', () => {
        start({ kind: 'crisp', scheme: 'grey', icon: true, dismissible: false });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    });
storiesOf('Kind::Crisp::Sticky', module)
    .add('Red', () => {
        start({ kind: 'crisp', scheme: 'red', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Orange', () => {
        start({ kind: 'crisp', scheme: 'orange', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Purple', () => {
        start({ kind: 'crisp', scheme: 'purple', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Green', () => {
        start({ kind: 'crisp', scheme: 'green', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Blue', () => {
        start({ kind: 'crisp', scheme: 'blue', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Grey', () => {
        start({ kind: 'crisp', scheme: 'grey', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    });
