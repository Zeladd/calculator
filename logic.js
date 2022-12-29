let nr1 = 0;
let nr2 = 0;
let liveDisplay = "";
const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".on-display");

const add = (nr1, nr2) => {
    return Number(nr1) + Number(nr2);
}

const substract = (nr1, nr2) => {
    return Number(nr1) - Number(nr2);
}

const multiply = (nr1, nr2) => {
    return Number(nr1) * Number(nr2);
}

const division = (nr1, nr2) => {
    return Number(nr1) / Number(nr2);
}

const clear = () => {
    return "";
}

const del = (nr) => {
    let result = "";
    if (nr.length >= 1) {
        for(let i = 0; i < nr.length - 1; i++) {
            result += nr[i];
        }
    }
    return result;
}

numbers.forEach(number => {
    number.addEventListener('click', () => {
        display.textContent = liveDisplay + number.textContent;
        liveDisplay += number.textContent;
    });
});