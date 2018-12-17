import React from 'react';
import ButterToast from './';
import {BUTTER_TOAST_NAMESPACE} from './constants';
import Tray from '../Tray';
import {mount} from 'enzyme';

const Div = ({className, children}) => <time className={className} children={children} />;
const namespace = Symbol.for(BUTTER_TOAST_NAMESPACE);

describe('<ButterToast/>', () => {
    let wrapper, tray, toast;

    afterEach(() => {
        document.body.innerHTML = '';
        delete window[namespace];
    });

    describe('Default behavior', () => {

        describe('ButterToast.show', () => {

            describe('Dynamic tray creation', () => {

                beforeEach(() => {
                    ButterToast.show({ namespace: 'initial'});
                    tray = document.querySelector('#__ButterToast___POS_TOP_POS_RIGHT_initial');
                });

                it('Should create a tray dynamically', () => {
                    let tray = document.querySelector('#__ButterToast___POS_TOP_POS_RIGHT_dynamic');
                    expect(tray).toBeNull();
                    ButterToast.show({ namespace: 'dynamic'});
                    tray = document.querySelector('#__ButterToast___POS_TOP_POS_RIGHT_dynamic');
                    expect(tray).not.toBeNull();
                });

                it('Should keep existing tray if same config', () => {
                    ButterToast.show({ namespace: 'initial'});
                    const newCreated = document.querySelector('#__ButterToast___POS_TOP_POS_RIGHT_initial');
                    expect(newCreated).toBe(tray);
                });

                it('Should add tray to global tray object', () => {
                    expect(window[namespace]['__ButterToast___POS_TOP_POS_RIGHT_initial']).toBeInstanceOf(Tray);
                });
            });

            describe('Custom parentNode', () => {
                let parentNode;

                beforeEach(() => {
                    document.body.innerHTML = '<div class="parent-node"></div>';
                    parentNode = document.querySelector('.parent-node');
                    ButterToast.show({ parentNode });
                });

                it('Should render tray inside parentNode', () => {
                    tray = parentNode.querySelector('.butter-toast');
                    expect(tray).not.toBeNull();
                });

                it('Should add tray to global tray object', () => {
                    expect(window[namespace]['__ButterToast___POS_TOP_POS_RIGHT']).toBeInstanceOf(Tray);
                });
            });

            describe('Raising toasts', () => {

                describe('Default', () => {
                    beforeEach(() => {
                        ButterToast.show({ content: <Div className="toast">toast-content</Div>, namespace: 'initial'});
                        tray = document.querySelector('.butter-toast');
                    });

                    it('Should render a toast inside tray', (done) => {
                        toast = tray.querySelector('.toast');
                        expect(toast).toBeNull();
                        setTimeout(() => {
                            toast = tray.querySelector('.toast');
                            expect(toast).not.toBeNull();
                            done();
                        });
                    });
                });

                describe('Into custom container', () => {
                    let parentNode;

                    beforeEach(() => {
                        document.body.innerHTML = '<section class="parent"></section>';
                        parentNode = document.querySelector('.parent');
                        ButterToast.show({ content: <Div className="toast">toast-content</Div>, namespace: 'initial', parentNode});
                        tray = parentNode.querySelector('.butter-toast');
                    });

                    it('Should render a toast inside tray', (done) => {
                        toast = parentNode.querySelector('.toast');
                        expect(toast).toBeNull();
                        setTimeout(() => {
                            toast = parentNode.querySelector('.toast');
                            expect(toast).not.toBeNull();
                            done();
                        });
                    });
                });
            });
        });

        describe('render', () => {

            beforeEach(() => {
                wrapper = mount(<div><ButterToast className="sample-class" namespace="sample-namespace"/></div>);
                tray = document.querySelector('body > aside.butter-toast');
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

        describe('tray id', () => {

            const createTray = (props = {}) => {
                const enrichedProps = {className: 'sample-class', ...props};
                wrapper = mount(<div><ButterToast {...enrichedProps}/></div>);
                tray = document.querySelector('body > aside.butter-toast');
            }

            it('Should add id attribute to tray', () => {
                createTray();
                expect(tray.getAttribute('id')).toBe('__ButterToast___POS_TOP_POS_RIGHT');
            });

            describe('with position configuration', () => {
                it('Should have position config in id', () => {
                    createTray({position: {vertical: 'POS_BOTTOM', horizontal: 'POS_CENTER'}});
                    expect(tray.getAttribute('id')).toBe('__ButterToast___POS_BOTTOM_POS_CENTER');
                });

                it('Should have position config in id', () => {
                    createTray({position: {vertical: 'POS_TOP', horizontal: 'POS_RIGHT'}});
                    expect(tray.getAttribute('id')).toBe('__ButterToast___POS_TOP_POS_RIGHT');
                });
            });

            describe('with namespace configuration', () => {
                it('Should have namespace config in id', () => {
                    createTray({namespace: 'sample'});
                    expect(tray.getAttribute('id')).toBe('__ButterToast___POS_TOP_POS_RIGHT_sample');
                });
            });
        });

        describe('Positioning', () => {

            describe('Default', () => {
                beforeEach(() => {
                    wrapper = mount(<ButterToast className="sample-class" namespace="sample-namespace" />);
                    tray = document.querySelector('body > aside.butter-toast');
                });

                it('Should match top-right inline style', () => {
                    expect(tray.style.top).toBe('10px');
                    expect(tray.style.right).toBe('0px');
                    expect(tray.style.bottom).toBeFalsy();
                    expect(tray.style.left).toBeFalsy();
                });
            });

            describe('With custom parentNode', () => {
                let parentNode;

                beforeEach(() => {
                    document.body.innerHTML = '<section class="sample"></section>';
                    parentNode = document.querySelector('section.sample');
                    ButterToast.show({ content: 'sample', parentNode });
                    tray = document.querySelector('section.sample > aside.butter-toast');
                });

                it('Should set position to `absolute`', () => {
                    expect(tray.style.position).toBe('absolute');
                });
            });

            describe('Top-Center', () => {
                beforeEach(() => {
                    wrapper = mount(<ButterToast className="sample-class" namespace="sample-namespace" position={{
                        vertical: 'POS_TOP', horizontal: 'POS_CENTER'
                    }}/>);
                    tray = document.querySelector('body > aside.butter-toast');
                });

                it('Should match top-center inline style', () => {
                    expect(tray.style.top).toBe('10px');
                    expect(tray.style.right).toBeFalsy();
                    expect(tray.style.bottom).toBeFalsy();
                    expect(tray.style.left).toBe('50%');
                });
            });

            describe('Top-Right', () => {
                beforeEach(() => {
                    wrapper = mount(<ButterToast className="sample-class" namespace="sample-namespace" position={{
                        vertical: 'POS_TOP', horizontal: 'POS_RIGHT'
                    }}/>);
                    tray = document.querySelector('body > aside.butter-toast');
                });

                it('Should match top-right inline style', () => {
                    expect(tray.style.top).toBe('10px');
                    expect(tray.style.right).toBe('0px');
                    expect(tray.style.bottom).toBeFalsy();
                    expect(tray.style.left).toBeFalsy();
                });
            });

            describe('Top-Left', () => {
                beforeEach(() => {
                    wrapper = mount(<ButterToast className="sample-class" namespace="sample-namespace" position={{
                        vertical: 'POS_TOP', horizontal: 'POS_LEFT'
                    }}/>);
                    tray = document.querySelector('body > aside.butter-toast');
                });

                it('Should match top-left inline style', () => {
                    expect(tray.style.top).toBe('10px');
                    expect(tray.style.right).toBeFalsy();
                    expect(tray.style.bottom).toBeFalsy();
                    expect(tray.style.left).toBe('0px');
                });
            });

            describe('Bottom-Center', () => {
                beforeEach(() => {
                    wrapper = mount(<ButterToast className="sample-class" namespace="sample-namespace" position={{
                        vertical: 'POS_BOTTOM', horizontal: 'POS_CENTER'
                    }}/>);
                    tray = document.querySelector('body > aside.butter-toast');
                });

                it('Should match bottom-center inline style', () => {
                    expect(tray.style.top).toBeFalsy();
                    expect(tray.style.right).toBeFalsy();
                    expect(tray.style.bottom).toBe('10px');
                    expect(tray.style.left).toBe('50%');
                });
            });

            describe('Bottom-right', () => {
                beforeEach(() => {
                    wrapper = mount(<ButterToast className="sample-class" namespace="sample-namespace" position={{
                        vertical: 'POS_BOTTOM', horizontal: 'POS_RIGHT'
                    }}/>);
                    tray = document.querySelector('body > aside.butter-toast');
                });

                it('Should match bottom-right inline style', () => {
                    expect(tray.style.top).toBeFalsy();
                    expect(tray.style.right).toBe('0px');
                    expect(tray.style.bottom).toBe('10px');
                    expect(tray.style.left).toBeFalsy();
                });
            });

            describe('Bottom-Left', () => {
                beforeEach(() => {
                    wrapper = mount(<ButterToast className="sample-class" namespace="sample-namespace" position={{
                        vertical: 'POS_BOTTOM', horizontal: 'POS_LEFT'
                    }}/>);
                    tray = document.querySelector('body > aside.butter-toast');
                });

                it('Should match bottom-left inline style', () => {
                    expect(tray.style.top).toBeFalsy();
                    expect(tray.style.right).toBeFalsy();
                    expect(tray.style.bottom).toBe('10px');
                    expect(tray.style.left).toBe('0px');
                });
            });
        });
    });

    describe('renderInContext', () => {
        beforeEach(() => {
            wrapper = mount(<div><ButterToast namesapce="in-context" renderInContext/></div>);
            tray = document.querySelector('body > aside.butter-toast');
        });

        it('Should render wrapper component with butter toast tray inside it', () => {
            expect(wrapper.find('aside.butter-toast')).toHaveLength(1);
        });

        it('Should add tray to global tray object', () => {
            const trayInstance = wrapper.find('Tray').instance()
            expect(window[namespace][trayInstance.id]).toBe(trayInstance);
        });
    });
});