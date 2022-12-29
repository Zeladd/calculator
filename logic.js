let nr1 = "";
let nr2 = "";
let isSymbol = false;
const nr1Display = document.querySelector("#nr1");
const nr2Display = document.querySelector("#nr2");
const numbers = document.querySelectorAll(".on-display");
const symbols = document.querySelectorAll("#symbols div");

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

const equal = (nr1, nr2) => {
    if (nr1[nr1.length - 1] === "+") {
        return add(del(nr1), nr2);
    }
    else if (nr1[nr1.length - 1] === "-") {
        return substract(del(nr1), nr2);
    }
    else if (nr1[nr1.length - 1] === "\u00D7") {
        return multiply(del(nr1), nr2);
    }
    else if (nr1[nr1.length - 1] === "\u00F7") {
        return division(del(nr1), nr2);
    }
    else {
        return nr1;
    }
}

numbers.forEach(number => {
    number.addEventListener('click', () => {
        if(nr2 === "" && isSymbol == false) {
            nr1 += number.textContent;
            nr1Display.textContent = nr1;
        }
        else {
            nr2 += number.textContent;
            nr2Display.textContent = nr2;
        }
    });
});

symbols.forEach(symbol => {
    symbol.addEventListener('click', () => {
        if (nr1.length >= 1 && isSymbol == false) {
            nr1 += symbol.textContent;
            nr1Display.textContent += symbol.textContent;
            isSymbol = true;
        }
    });
});

document.querySelector("#clear").addEventListener('click', () => {
    nr1 = clear();
    nr2 = clear();
    nr1Display.textContent = clear();
    nr2Display.textContent = clear();
    isSymbol = false;
});

document.querySelector("#delete").addEventListener('click', () => {
    if (nr2 === "") {
        isSymbol = false;
        nr1 = del(nr1);
        nr1Display.textContent = nr1;
    }
    else {
        nr2 = del(nr2);
        nr2Display.textContent = nr2;
    }
});

document.querySelector("#equal").addEventListener('click', () => {
    if (isSymbol === true && nr2.length >= 1) {
        nr1 = equal(nr1, nr2);
        nr1 = nr1.toString();
        nr1Display.textContent = nr1;
        nr2 = clear();
        nr2Display.textContent = clear();
        isSymbol = false;
    }
});