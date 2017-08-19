import React, { Component } from 'react';
import ButterToast from 'butter-toast'
import logo from './logo.svg';
import './App.css';

function raiseAll(){
    ButterToast.raise({
        content: (<div className="content">Seriously?!</div>)
    });
}

function raise(){
    ButterToast.raise({
        content: (<div className="content">Seriously?!</div>)
    });
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Butter Toast</h2>
                </div>
                <aside>
                    <a href="#!" onClick={raiseAll}>Show all</a>
                    <a href="#!" onClick={raise('bottom-right')}>Bottom Right</a>
                    <a href="#!" onClick={raise('bottom-right')}>Bottom Left</a>
                    <a href="#!" onClick={raise('bottom-right')}>Bottom Center</a>
                    <a href="#!" onClick={raise()}>Top Right</a>
                    <a href="#!" onClick={raise()}>Top Left</a>
                    <a href="#!" onClick={raise()}>Top Center</a>
                </aside>
                <div>
                    <ButterToast name="bottom-left" trayPosition="bottom-left"/>
                    <ButterToast name="bottom-right" trayPosition="bottom-right"/>
                    <ButterToast name="bottom-center" trayPosition="bottom-center"/>
                    <ButterToast name="top-left" trayPosition="top-left"/>
                    <ButterToast name="top-right" trayPosition="top-right"/>
                    <ButterToast name="top-center" trayPosition="top-center"/>
                </div>
            </div>
        );
    }
}

export default App;
