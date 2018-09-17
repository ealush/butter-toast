import React from 'react';
import { storiesOf } from '@storybook/react';
import ButterToast from '../src';
import { POS_RIGHT, POS_CENTER, POS_LEFT, POS_TOP, POS_BOTTOM } from '../src/ButterToast/styles';
import { start } from './tools.js';

storiesOf('Kind::Crisp', module)
    .add('Red - top/center', () => {
        start({ kind: 'crisp', scheme: 'red' });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    })
    .add('Orange - bottom/center', () => {
        start({ kind: 'crisp', scheme: 'orange' });
        return (<ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_CENTER }}/>);
    })
    .add('Purple - top/left', () => {
        start({ kind: 'crisp', scheme: 'purple' });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_LEFT }}/>);
    })
    .add('Green - bottom/left', () => {
        start({ kind: 'crisp', scheme: 'green' });
        return (<ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_LEFT }}/>);
    })
    .add('Blue - top/right', () => {
        start({ kind: 'crisp', scheme: 'blue' });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_RIGHT }}/>);
    })
    .add('Grey - bottom/right', () => {
        start({ kind: 'crisp', scheme: 'grey' });
        return (<ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_RIGHT }}/>);
    });
storiesOf('Kind::Crisp::With Icon', module)
    .add('Red', () => {
        start({ kind: 'crisp', scheme: 'red', icon: true });
        return (<ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_CENTER }}/>);
    })
    .add('Orange', () => {
        start({ kind: 'crisp', scheme: 'orange', icon: true });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    })
    .add('Purple', () => {
        start({ kind: 'crisp', scheme: 'purple', icon: true });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    })
    .add('Green', () => {
        start({ kind: 'crisp', scheme: 'green', icon: true });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    })
    .add('Blue', () => {
        start({ kind: 'crisp', scheme: 'blue', icon: true });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    })
    .add('Grey', () => {
        start({ kind: 'crisp', scheme: 'grey', icon: true });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    });
storiesOf('Kind::Crisp::Non dismissible', module)
    .add('Red', () => {
        start({ kind: 'crisp', scheme: 'red', icon: true, dismissible: false });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    })
    .add('Orange', () => {
        start({ kind: 'crisp', scheme: 'orange', icon: true, dismissible: false });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    })
    .add('Purple', () => {
        start({ kind: 'crisp', scheme: 'purple', icon: true, dismissible: false });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    })
    .add('Green', () => {
        start({ kind: 'crisp', scheme: 'green', icon: true, dismissible: false });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    })
    .add('Blue', () => {
        start({ kind: 'crisp', scheme: 'blue', icon: true, dismissible: false });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    })
    .add('Grey', () => {
        start({ kind: 'crisp', scheme: 'grey', icon: true, dismissible: false });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    });
storiesOf('Kind::Crisp::Sticky', module)
    .add('Red', () => {
        start({ kind: 'crisp', scheme: 'red', sticky: true });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    })
    .add('Orange', () => {
        start({ kind: 'crisp', scheme: 'orange', sticky: true });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    })
    .add('Purple', () => {
        start({ kind: 'crisp', scheme: 'purple', sticky: true });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    })
    .add('Green', () => {
        start({ kind: 'crisp', scheme: 'green', sticky: true });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    })
    .add('Blue', () => {
        start({ kind: 'crisp', scheme: 'blue', sticky: true });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    })
    .add('Grey', () => {
        start({ kind: 'crisp', scheme: 'grey', sticky: true });
        return (<ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }}/>);
    });
