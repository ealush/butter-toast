export default function generateToastId() {
    // not perfect, but collision is very unlikely
    return Date.now().toString().slice(5, 13) + Math.random().toString().slice(-6);
}