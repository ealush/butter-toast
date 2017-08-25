export default function findByClassName(className) {
    return document.querySelector(`.${className.replace(/ /g, '.')}`);
}