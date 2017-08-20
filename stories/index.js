import React from 'react'; // eslint-disable-line no-unused-vars
import { storiesOf } from '@kadira/storybook';
import ButterToast from '../src';
import './style.scss';

const quotes = [
    'Wubba-lubba-dub-dub!',
    'Rikki-Tikki-Tavi, biatch!',
    "And that's why I always say, \"shum-shum-schlippety-dop!\"",
    "Sometimes science is more art than science, Morty. Lot of people don't get that.",
    "Quantum carburetor? Jesus Morty, you can't just add a sci-fi word to a car word and hope it means something. Looks like something's wrong with the micro-verse battery.",
    "Uncertainty is inherently unsustainable. Eventually, everything either is or isn't.",
    'Oh, shit!',
    'How is this a fair trial? Our laywer is a Morty.',
    'You\'re classified as a hostile entity and Unity doesn\'t wanna talk to you.',
    'Can somebody just let me out of here? If I die in a cage I lose a bet.',
    "That's my one-armed man! I'm not driven by avenging my dead family, Morty! That was fake. I-I-I'm driven by finding that McNugget sauce.",
    "We're on a planet that's purging, Summer. Purging. We lost our car and my gun and we're in a purge."];

const icons = ['fa-arrow-down', 'fa-bath', 'fa-bell-slash', 'fa-mouse-pointer', 'fa-mouse-pointer'];

function rand(arr) {
    return arr[Math.floor(Math.random()*arr.length)] || arr[0];
}

function raise() {
    const toastTimeout = 5000;
    ButterToast.raise({
        content: (
            <div className="my-toast">
                {rand(quotes)}
                <i className={`fa ${rand(icons)}`}/>
            </div>
        ),
        toastTimeout
    });
}

function raiseRandomTimeout() {
    const toastTimeout = (Math.round(Math.random()*7000) + 3000);
    ButterToast.raise({
        content: (
            <div className="my-toast">
                {rand(quotes)}
                <i className={`fa ${rand(icons)}`}/>
            </div>
        ),
        toastTimeout
    });
}

function raiseSticky() {
    ButterToast.raise({
        content: (
            <div className="my-toast">
                {rand(quotes)}
                <i className={`fa ${rand(icons)}`}/>
            </div>
        ),
        sticky: true,
        dismissOnClick: true
    });
}

function raiseDismissOnClick() {
    ButterToast.raise({
        content: (
            <div className="my-toast">
                {rand(quotes)}
                <i className={`fa ${rand(icons)}`}/>
            </div>
        ),
        dismissOnClick: true
    });
}

storiesOf('Toast', module) // eslint-disable-line no-undef
    .add('bottom-left', () => (
        <div>
            <ButterToast trayPosition="bottom-left"/>
            <a href="#!" onClick={raise}>Raise a toast!</a>
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