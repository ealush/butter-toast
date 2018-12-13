import React from 'react';
import ButterToast from './';
import { mount } from 'enzyme';

describe('<ButterToast/>', () => {
    let wrapper, tray;

    describe('Default behavior', () => {

        describe('render', () => {

            beforeEach(() => {
                wrapper = mount(<div><ButterToast className="sample-class" namespace="sample-namespace"/></div>);
                tray = document.querySelector('body > aside.butter-toast');
            });

            afterEach(() => {
                document.body.innerHTML = '';
            });

            it('Should render wrapper component without the tray inside it', () => {
                expect(wrapper.find('aside.butter-toast')).toHaveLength(0);
            });

            it('Should render tray as direct descendant of body', () => {
                expect(document.querySelectorAll('body > aside.butter-toast')).toHaveLength(1);
            });

            it('Should add custom className to tray', () => {
                expect(tray.classList.contains('sample-class')).toBe(true);
            });

            it('Should add namespace to tray as classname', () => {
                expect(tray.classList.contains('sample-namespace')).toBe(true);
            });

            it('Should render a `ul`', () => {
                expect(tray.querySelectorAll('ul')).toHaveLength(1);
            });
        });

        describe('Positioning', () => {

            describe('Default', () => {
                beforeEach(() => {
                    wrapper = mount(<ButterToast className="sample-class" namespace="sample-namespace" />);
                    tray = document.querySelector('body > aside.butter-toast');
                });

                afterEach(() => {
                    document.body.innerHTML = '';
                });

                it('Should match top-right inline style', () => {
                    expect(tray.getAttribute('style')).toBe('position: fixed; z-index: 99999; top: 10px; right: 0px;');
                });
            });

            describe('Top-Right', () => {
                beforeEach(() => {
                    wrapper = mount(<ButterToast className="sample-class" namespace="sample-namespace" position={{
                        vertical: 'POS_TOP', horizontal: 'POS_CENTER'
                    }}/>);
                    tray = document.querySelector('body > aside.butter-toast');
                });

                afterEach(() => {
                    document.body.innerHTML = '';
                });

                it('Should match top-center inline style', () => {
                    expect(tray.getAttribute('style')).toBe('position: fixed; z-index: 99999; top: 10px; left: 50%;');
                });
            });

            describe('Top-Center', () => {
                beforeEach(() => {
                    wrapper = mount(<ButterToast className="sample-class" namespace="sample-namespace" position={{
                        vertical: 'POS_TOP', horizontal: 'POS_RIGHT'
                    }}/>);
                    tray = document.querySelector('body > aside.butter-toast');
                });

                afterEach(() => {
                    document.body.innerHTML = '';
                });

                it('Should match top-right inline style', () => {
                    expect(tray.getAttribute('style')).toBe('position: fixed; z-index: 99999; top: 10px; right: 0px;');
                });
            });

            describe('Top-Left', () => {
                beforeEach(() => {
                    wrapper = mount(<ButterToast className="sample-class" namespace="sample-namespace" position={{
                        vertical: 'POS_TOP', horizontal: 'POS_LEFT'
                    }}/>);
                    tray = document.querySelector('body > aside.butter-toast');
                });

                afterEach(() => {
                    document.body.innerHTML = '';
                });

                it('Should match top-left inline style', () => {
                    expect(tray.getAttribute('style')).toBe('position: fixed; z-index: 99999; top: 10px; left: 0px;');
                });
            });

            describe('Bottom-Right', () => {
                beforeEach(() => {
                    wrapper = mount(<ButterToast className="sample-class" namespace="sample-namespace" position={{
                        vertical: 'POS_BOTTOM', horizontal: 'POS_CENTER'
                    }}/>);
                    tray = document.querySelector('body > aside.butter-toast');
                });

                afterEach(() => {
                    document.body.innerHTML = '';
                });

                it('Should match top-center inline style', () => {
                    expect(tray.getAttribute('style')).toBe('position: fixed; z-index: 99999; bottom: 10px; left: 50%;');
                });
            });

            describe('Bottom-Center', () => {
                beforeEach(() => {
                    wrapper = mount(<ButterToast className="sample-class" namespace="sample-namespace" position={{
                        vertical: 'POS_BOTTOM', horizontal: 'POS_RIGHT'
                    }}/>);
                    tray = document.querySelector('body > aside.butter-toast');
                });

                afterEach(() => {
                    document.body.innerHTML = '';
                });

                it('Should match top-right inline style', () => {
                    expect(tray.getAttribute('style')).toBe('position: fixed; z-index: 99999; bottom: 10px; right: 0px;');
                });
            });

            describe('Bottom-Left', () => {
                beforeEach(() => {
                    wrapper = mount(<ButterToast className="sample-class" namespace="sample-namespace" position={{
                        vertical: 'POS_BOTTOM', horizontal: 'POS_LEFT'
                    }}/>);
                    tray = document.querySelector('body > aside.butter-toast');
                });

                afterEach(() => {
                    document.body.innerHTML = '';
                });

                it('Should match top-left inline style', () => {
                    expect(tray.getAttribute('style')).toBe('position: fixed; z-index: 99999; bottom: 10px; left: 0px;');
                });
            });
        });
    });

    describe('renderInContext', () => {
        beforeEach(() => {
            wrapper = mount(<div><ButterToast renderInContext/></div>);
            tray = document.querySelector('body > aside.butter-toast');
        });

        it('Should render wrapper component with butter toast tray inside it', () => {
            expect(wrapper.find('aside.butter-toast')).toHaveLength(1);
        });

    });
});