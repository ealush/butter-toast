import React from 'react';
import Toast from './';
import { mount } from 'enzyme';

const toastProps = (extend = {}) => {
    return Object.assign({}, {
        toast: {
            id: 's123',
            height: 70,
            content: 'example',
            timeout: 6000,
        },
        setHeight: () => null
    }, extend);
}

describe('Toast Component', () => {
    let wrapper, instance;

    describe('componentDidMount', () => {
        it('should call `this.open`', (done) => {
            wrapper = mount(<Toast {...toastProps()}/>);
            instance = wrapper.instance();
            instance.open = jest.fn();
            instance.componentDidMount();
            setTimeout(() => {
                expect(instance.open).toHaveBeenCalledTimes(1);
                done();
            });

        });
    });

    describe('componentWillUnmount', () => {
        it('should call `this.clearTimeout`', () => {
            wrapper = mount(<Toast {...toastProps()}/>);
            instance = wrapper.instance();
            instance.clearTimeout = jest.fn();
            instance.componentWillUnmount();
            expect(instance.clearTimeout).toHaveBeenCalledTimes(1);
        });
    });

    describe('open', () => {
        it('should call `setState` with: `{ isOpen: true }, instance.toastDidOpen`', () => {
            wrapper = mount(<Toast {...toastProps()}/>);
            instance = wrapper.instance();
            instance.setState = jest.fn();
            instance.open();
            expect(instance.setState).toHaveBeenCalledWith({ isOpen: true }, instance.toastDidOpen);
        });
    });

    describe('startTimeout', () => {
        const _setTimeout = global.setTimeout;
        const _now = global.Date.now;
        const now = Date.now();

        beforeEach(() => {
            global.Date.now = jest.fn(() => now);
            wrapper = mount(<Toast {...toastProps()}/>);
            instance = wrapper.instance();
            global.setTimeout = jest.fn((...args) => _setTimeout(...args));
        });

        afterEach(() => {
            global.setTimeout = _setTimeout;
            global.Date.now = _now;
        });

        describe('toast is not sticky', () => {
            describe('remaining is set', () => {
                it('should call setTimeout with `this.close` and `remaining value`', () => {
                    instance.remaining = 1500;
                    instance.startTimeout();
                    expect(global.setTimeout).toHaveBeenCalledWith(instance.close, 1500);
                });

                it('should set `this.ends` with now + the new timeout', () => {
                    instance.remaining = 1000;
                    instance.startTimeout();
                    expect(instance.ends).toBe(now + 1000);
                });

                describe('less than 200 ms remaining', () => {
                    it('should add 200ms to the remaining value', () => {
                        instance.remaining = 50;
                        instance.startTimeout();
                        expect(global.setTimeout).toHaveBeenCalledWith(instance.close, 250);
                    });

                    it('should set `this.ends` with now + the new timeout', () => {
                        instance.remaining = 50;
                        instance.startTimeout();
                        expect(instance.ends).toBe(now + 250);
                    });
                });
            });

            describe('remaining is not set', () => {
                it('should call setTimeout with `this.close` and `timeout value`', () => {
                    instance.startTimeout();
                    expect(global.setTimeout).toHaveBeenCalledWith(instance.close, toastProps().toast.timeout);
                });

                it('should set `this.ends` with now + the new timeout', () => {
                    instance.startTimeout();
                    expect(instance.ends).toBe(now + toastProps().toast.timeout);
                });

                describe('timeout is less than 200ms', () => {
                    beforeEach(() => {
                        const toast = toastProps();
                        toast.toast.timeout = 50;
                        wrapper = mount(<Toast {...toast}/>);
                        instance = wrapper.instance();
                    });

                    it('should add 200ms to the value', () => {
                        instance.startTimeout();
                        expect(global.setTimeout).toHaveBeenCalledWith(instance.close, 250);
                    });

                    it('should set `this.ends` with now + the new timeout', () => {
                        instance.startTimeout();
                        expect(instance.ends).toBe(now + 250);
                    });
                });
            });

            it('should call clearTimeout', () => {
                instance.clearTimeout = jest.fn();
                instance.startTimeout();
                expect(instance.clearTimeout).toHaveBeenCalled();
            });

            it('should clear `this.remaining`', () => {
                instance.remaining = 1000;
                instance.startTimeout();
                expect(instance.remaining).toBe(undefined);
            });
        });

        describe('toast is sticky', () => {
            beforeEach(() => {
                const toast = toastProps();
                toast.toast.sticky = true;
                wrapper = mount(<Toast {...toast}/>);
                instance = wrapper.instance();
            });

            test('this.timeout stays unchanged', () => {
                const timeout = instance.timeout;
                instance.startTimeout();
                expect(instance.timeout).toBe(timeout);
            });

            test('this.ends stays unchanged', () => {
                const ends = instance.ends;
                instance.startTimeout();
                expect(instance.ends).toBe(ends);
            });

            test('this.remaining stays unchanged', () => {
                const remaining = instance.remaining;
                instance.startTimeout();
                expect(instance.remaining).toBe(remaining);
            });
        });

        describe('toast timeout is `Infinity`', () => {
            beforeEach(() => {
                const toast = toastProps();
                toast.toast.timeout = Infinity;
                wrapper = mount(<Toast {...toast}/>);
                instance = wrapper.instance();
            });

            test('this.timeout stays unchanged', () => {
                const timeout = instance.timeout;
                instance.startTimeout();
                expect(instance.timeout).toBe(timeout);
            });

            test('this.ends stays unchanged', () => {
                const ends = instance.ends;
                instance.startTimeout();
                expect(instance.ends).toBe(ends);
            });

            test('this.remaining stays unchanged', () => {
                const remaining = instance.remaining;
                instance.startTimeout();
                expect(instance.remaining).toBe(remaining);
            });
        });
    });

    describe('clearTimeout', () => {
        let _clearTimeout = global.clearTimeout;

        beforeEach(() => {
            global.clearTimeout = jest.fn((...args) => _clearTimeout(...args));
            wrapper = mount(<Toast {...toastProps()}/>);
            instance = wrapper.instance();
        });

        afterEach(() => {
            global.clearTimeout = _clearTimeout;
        });

        it('should set remaining to the result of calcRemaining', () => {
            instance.calcRemaining = jest.fn(() => 2000);
            instance.clearTimeout();
            expect(instance.remaining).toBe(2000);
        });

        it('should call `clearTimeout` with this.timeout', () => {
            instance.clearTimeout();
            expect(global.clearTimeout).toHaveBeenCalledWith(instance.timeout);
        });
    });

    describe('calcRemaining', () => {
        const _now = global.Date.now;
        const now = Date.now();

        beforeEach(() => {
            global.Date.now = jest.fn(() => now);
            wrapper = mount(<Toast {...toastProps()}/>);
            instance = wrapper.instance();
        });

        afterEach(() => {
            global.Date.now = _now;
        });

        it('should substract Date.now() from end time', () => {
            expect(instance.calcRemaining()).toBe(instance.ends - now);
        });
    });

    describe('toastDidOpen', () => {
        beforeEach(() => {
            wrapper = mount(<Toast {...toastProps({setHeight: jest.fn()})}/>);
            instance = wrapper.instance();
            instance.startTimeout = jest.fn();
        });

        it('should setState `shown: true`', (done) => {
            instance.toastDidOpen();
            setTimeout(() => {
                expect(wrapper.state().shown).toEqual(true);
                done();
            }, 0);
        });

        it('should call setHeight with `toastId` and tost height', (done) => {
            instance.toastDidOpen();
            setTimeout(() => {
                expect(instance.props.setHeight).toHaveBeenCalledWith(toastProps().toast.id, instance.toastRef.clientHeight);
                done();
            }, 0);
        });
    });

    describe('render', () => {
        beforeEach(() => {
            wrapper = mount(<Toast {...toastProps()}/>);
            instance = wrapper.instance();
        });

        describe('pauseOnHover is true', () => {
            it('should call `this.clearTimeout` on mouse enter', () => {
                instance.clearTimeout = jest.fn();
                wrapper.simulate('mouseenter', {});
                expect(instance.clearTimeout).toHaveBeenCalledTimes(1);
            });

            it('should call `this.startTimeout` on mouse leave', () => {
                instance.startTimeout = jest.fn();
                wrapper.simulate('mouseleave', {});
                expect(instance.startTimeout).toHaveBeenCalledTimes(1);
            });
        });

        describe('pauseOnHover is false', () => {

            beforeEach(() => {
                wrapper = mount(<Toast {...toastProps({pauseOnHover: false})}/>);
                instance = wrapper.instance();
            });

            it('should call `this.clearTimeout` on mouse enter', () => {
                instance.clearTimeout = jest.fn();
                wrapper.simulate('mouseenter', {});
                expect(instance.clearTimeout).toHaveBeenCalledTimes(0);
            });

            it('should call `this.startTimeout` on mouse leave', () => {
                instance.startTimeout = jest.fn();
                wrapper.simulate('mouseleave', {});
                expect(instance.startTimeout).toHaveBeenCalledTimes(0);
            });
        });

        describe('API', () => {
            let toastMock;

            beforeEach(() => {
                toastMock = jest.fn((props) => <span>example</span>);
                const toast = toastProps();
                toast.toast.content = toastMock;

                wrapper = mount(<Toast {...toast}/>);
                instance = wrapper.instance();
            });

            [
                'toastId',
                'dismiss',
                'onClick',
                'calcRemaining',
                'trayPosition'
            ].forEach((prop) => {
                it(`should pass down to toast component the ${prop} API prop`, () => {
                    expect(toastMock.mock.calls[0][0]).toHaveProperty(prop)
                });
            });
        })
    });
});
