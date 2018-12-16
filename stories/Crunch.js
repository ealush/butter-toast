import React from 'react';
import { storiesOf } from '@storybook/react';
import ButterToast from '../src';
import { POS_RIGHT, POS_CENTER, POS_LEFT, POS_TOP, POS_BOTTOM } from '../src/ButterToast/constants';
import { start } from './tools.js';

storiesOf('Kind::crunch', module)
    .add('Red - top/center', () => {
        start({ kind: 'crunch', scheme: 'red' });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    })
    .add('Orange - bottom/center', () => {
        start({ kind: 'crunch', scheme: 'orange' });
        return (<ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_CENTER }}/>);
    })
    .add('Red - top/left', () => {
        start({ kind: 'crunch', scheme: 'red' });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_LEFT }}/>);
    })
    .add('Green - bottom/left', () => {
        start({ kind: 'crunch', scheme: 'green' });
        return (<ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_LEFT }}/>);
    })
    .add('Blue - top/right', () => {
        start({ kind: 'crunch', scheme: 'blue' });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_RIGHT }}/>);
    })
    .add('Grey - bottom/right', () => {
        start({ kind: 'crunch', scheme: 'grey' });
        return (<ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_RIGHT }}/>);
    });
storiesOf('Kind::crunch::With Icon', module)
    .add('Red', () => {
        start({ kind: 'crunch', scheme: 'red', icon: true });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    })
    .add('Orange', () => {
        start({ kind: 'crunch', scheme: 'orange', icon: true });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    })
    .add('Green', () => {
        start({ kind: 'crunch', scheme: 'green', icon: true });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    })
    .add('Blue', () => {
        start({ kind: 'crunch', scheme: 'blue', icon: true });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    })
    .add('Grey', () => {
        start({ kind: 'crunch', scheme: 'grey', icon: true });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    });
storiesOf('Kind::crunch::Non dismissible', module)
    .add('Red', () => {
        start({ kind: 'crunch', scheme: 'red', icon: true, dismissible: false });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    })
    .add('Orange', () => {
        start({ kind: 'crunch', scheme: 'orange', icon: true, dismissible: false });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    })
    .add('Green', () => {
        start({ kind: 'crunch', scheme: 'green', icon: true, dismissible: false });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    })
    .add('Blue', () => {
        start({ kind: 'crunch', scheme: 'blue', icon: true, dismissible: false });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    })
    .add('Grey', () => {
        start({ kind: 'crunch', scheme: 'grey', icon: true, dismissible: false });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    });
storiesOf('Kind::crunch::Sticky', module)
    .add('Red', () => {
        start({ kind: 'crunch', scheme: 'red', sticky: true });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    })
    .add('Orange', () => {
        start({ kind: 'crunch', scheme: 'orange', sticky: true });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    })
    .add('Green', () => {
        start({ kind: 'crunch', scheme: 'green', sticky: true });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    })
    .add('Blue', () => {
        start({ kind: 'crunch', scheme: 'blue', sticky: true });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    })
    .add('Grey', () => {
        start({ kind: 'crunch', scheme: 'grey', sticky: true });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    });
