const createTrayRef = (ref, id) => {
    window._btTrays = window._btTrays || {};

    if (!ref) {
        return;
    }

    window._btTrays[ref.id] = ref;
}

export default createTrayRef;