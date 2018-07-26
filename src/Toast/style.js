export const toastStyle = ({ shown, removed }) => {
    const base = {
        opacity: 0,
        transition: 'opacity .5s'
    };

    if (shown) {
        Object.assign(base, {
            opacity: 1,
            transform: 'scale(1)',
        });
    }

    if (removed) {
        Object.assign(base, {
            transform: 'scale(.9)',
            transition: 'opacity .3s, transform .3s'
        });
    }

    return base;
}
