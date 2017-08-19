export default function translateY(prev = 0, current = 0) {
    return {
        transform: `translateY(${prev + current}px)`
    };
}