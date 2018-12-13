export const isSticky = (toast = {}) => toast.sticky || toast.timeout === Infinity;

// if no `remaining`, just use the toast's timeout
export const calcNextTimeout = (remaining, timeout) => {
    const next = typeof remaining === 'number' ? remaining : timeout;
    return next < 200 ? 200 + next : next;
}