export default function rand(arr) {
    return arr[Math.floor(Math.random()*arr.length)] || arr[0];
}