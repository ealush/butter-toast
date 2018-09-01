export default function generateId(prefix) {
    const time = `${Date.now()}`.slice(-8);
    const rand = `${Math.random()}`.slice(2);
    const id = time + rand;
    return prefix ? `${prefix}_${id}` : time + rand;
}
