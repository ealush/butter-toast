import {
    POS_BOTTOM,
    POS_CENTER,
    POS_LEFT,
    POS_RIGHT
} from '../../constants';

const styleRight = {
    right: 0
};

const styleLeft = {
    left: 0
};

const styleCenter = {
    left: '50%'
};

const styles = (position = {}, spacing = 0, customContext) => {

    if (position === null) {
        return {};
    }

    let {vertical, horizontal} = position;

    return Object.assign({ zIndex: 99999 },
        customContext ? { position: 'absolute' } : { position: 'fixed'},
        vertical === POS_BOTTOM ? {bottom: `${spacing}px`} : {top: `${spacing}px`},
        horizontal === POS_CENTER ? styleCenter : {},
        horizontal === POS_LEFT ? styleLeft : {},
        horizontal === POS_RIGHT ? styleRight : {}
    );
}

export default styles;