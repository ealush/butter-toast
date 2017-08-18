export default function generateStyle(config, index, position) {
    const height = parseInt(config.toastHeight, 10),
        margin = parseInt(config.toastMargin, 10);

    if (position.isBottom) {
        index = index * -1;
    }

    let translateX = 0;

    if (position.isCenter) {
        translateX = '-50%';
    } else if (position.isRight) {
        translateX = '-100%';
    }

    return {
        height,
        transform: `translateY(${(height + margin) * index}px) translateX(${translateX})`
    };
}
