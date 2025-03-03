const words = ["apples", "orange", "banana"];

const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(longWords);

function getShortWords(element){
    return element.length <= 3;
}

function getLongWords(element){
    return element.length > 3;
}