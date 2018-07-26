export const POS_TOP = 'POS_TOP';
export const POS_BOTTOM = 'POS_BOTTOM';
export const POS_LEFT = 'POS_LEFT';
export const POS_RIGHT = 'POS_RIGHT';
export const POS_CENTER = 'POS_CENTER';

const styleRight = {
    right: 0
};

const styleLeft = {
    left: 0
};

const styleCenter = {
    left: '50%'
};

const styleBottom = {
    bottom: '10px'
};

const styleTop = {
    top: '10px'
};

const styleBase = {
    position: 'fixed',
    zIndex: 99999
};

export default function styles(position = {}, spacing = 0) {

    if (position === null) {
        return {};
    }

    let { vertical, horizontal } = position;

    return Object.assign({}, styleBase,
        vertical === POS_BOTTOM ? {bottom: `${spacing}px`} : {top: `${spacing}px`},
        horizontal === POS_CENTER ? styleCenter : {},
        horizontal === POS_LEFT ? styleLeft : {},
        horizontal === POS_RIGHT ? styleRight : {}
    );
}
