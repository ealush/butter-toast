import React from 'react';
import { storiesOf } from '@storybook/react';
import ButterToast from '../src';
import { POS_RIGHT, POS_CENTER, POS_LEFT, POS_TOP, POS_BOTTOM } from '../src/ButterToast/styles';
import { start } from './tools.js';

storiesOf('Kind::Slim', module)
    .add('Dark - top/center', () => {
        start({ kind: 'slim', scheme: 'dark' });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    })
    .add('Dark - bottom/center', () => {
        start({ kind: 'slim', scheme: 'dark' });
        return (<ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_CENTER }}/>);
    })
    .add('Dark - top/left', () => {
        start({ kind: 'slim', scheme: 'dark' });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_LEFT }}/>);
    })
    .add('Dark - bottom/left', () => {
        start({ kind: 'slim', scheme: 'dark' });
        return (<ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_LEFT }}/>);
    })
    .add('Light - top/right', () => {
        start({ kind: 'slim', scheme: 'light' });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_RIGHT }}/>);
    })
    .add('Light - bottom/right', () => {
        start({ kind: 'slim', scheme: 'light' });
        return (<ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_RIGHT }}/>);
    });
storiesOf('Kind::Slim::Sticky', module)
    .add('Dark', () => {
        start({ kind: 'slim', scheme: 'dark', sticky: true });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    })
    .add('Light', () => {
        start({ kind: 'slim', scheme: 'light', sticky: true });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    });
