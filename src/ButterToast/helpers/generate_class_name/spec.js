import generateClassName from './index';

describe('Test generateClassName helper function', () => {

    it('should produce a correct class name based on configuration', () => {
        expect(generateClassName({
            name: 'test',
            trayPosition: 'bottom'
        })).toBe('butter-toast-tray butter-toast-test bottom');

        expect(generateClassName({
            name: 'bt-test',
            trayPosition: 'bottom-right'
        })).toBe('butter-toast-tray butter-toast-bt-test bottom-right');
    });

    it('should return correct class name and safely ignore tray name when none supplied', () => {
        expect(generateClassName({
            trayPosition: 'bottom-right'
        })).toBe('butter-toast-tray bottom-right');
    });

    it('should return correct class name and safely ignore tray position when none supplied', () => {
        expect(generateClassName({
            name: 'test'
        })).toBe('butter-toast-tray butter-toast-test');
    });

    it('should return correct class name and safely ignore both tray position and name when none supplied', () => {
        expect(generateClassName()).toBe('butter-toast-tray');
    });
});