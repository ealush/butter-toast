export default function translate({height = 0, isRight, isCenter}) {
    let X = 0;

    if (isRight) {
        X = '-100%';
    } else if (isCenter) {
        X = '-50%';
    }

    return {
        transform: `translateY(${height}px) translateX(${X})`
    };
}