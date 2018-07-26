import { POS_RIGHT, POS_CENTER, POS_TOP } from '../ButterToast/styles';

const ulStyle = {
    position: 'relative',
    padding: 0,
    margin: 0,
    listStyleType: 'none'
};

const liStyle = ({ position = { vertical: POS_TOP, horizontal: POS_CENTER }, spacing, offset, height, index = 0 }) => {
    const base = {
        position: 'absolute',
        transition: 'transform .3s',
        'transitionDelay': `${index * .02}s` // <- this creates a subtle elastic stacking/collapsing effect. Sort of a chain-reaction effect.
    };

    let translateY;
    if (offset === 0 && !height && (position.vertical === POS_TOP)) {
        translateY = 'translateY(-100%)';
    } else {
        translateY = `translateY(${offset}px)`;
    }

    switch (position.horizontal) {
        case POS_RIGHT:
            base.right = `${spacing}px`;
            base.transform= translateY;
            break;
        case POS_CENTER:
            base.transform = `translateX(-50%) ${translateY}`;
            break;
        default:
            base.left = `${spacing}px`;
            base.transform = translateY;
            break;
    }

    return base;
}

export {
    ulStyle,
    liStyle
};
