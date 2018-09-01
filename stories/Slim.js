import React from 'react';
import { storiesOf } from '@storybook/react';
import ButterToast from '../src';
import { POS_RIGHT, POS_CENTER, POS_LEFT, POS_TOP, POS_BOTTOM } from '../src/ButterToast/styles';
import { start, dismissAll } from './tools.js';

storiesOf('Kind::Slim', module)
    .add('Dark - top/center', () => {
        start({ kind: 'slim', scheme: 'dark' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Dark - bottom/center', () => {
        start({ kind: 'slim', scheme: 'dark' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Dark - top/left', () => {
        start({ kind: 'slim', scheme: 'dark' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_LEFT }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Dark - bottom/left', () => {
        start({ kind: 'slim', scheme: 'dark' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_LEFT }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Light - top/right', () => {
        start({ kind: 'slim', scheme: 'light' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_RIGHT }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Light - bottom/right', () => {
        start({ kind: 'slim', scheme: 'light' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_RIGHT }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    });
storiesOf('Kind::Slim::Sticky', module)
    .add('Dark', () => {
        start({ kind: 'slim', scheme: 'dark', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Light', () => {
        start({ kind: 'slim', scheme: 'light', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    });
