import React from 'react'; // eslint-disable-line no-unused-vars
import { storiesOf, action } from '@kadira/storybook';
import ButterToast from '../src';
import './style.scss';

function raise() {
    const toastTimeout = Math.round(Math.random()*8000);
    window.dispatchEvent(new CustomEvent('ButterToast', {
        detail: {text: 'just wanted to say that I really like your shirt!', toastTimeout}
    }));

}

storiesOf('Toast', module).add('sample toast', () => (
    <div>
        <ButterToast/>
        <a href="#!" onClick={raise}>Heres a toast to you!</a>
    </div>
));