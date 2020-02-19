const readline = require('./lib/readline.js');

// ถ้าแลกเฉพาะฝาโคล่าที่ซื้อรอบแรกเท่านั้น
const optional1_1 = input => {
    input = Number(input);
    if (0 > input > 1000000000 || isNaN(input)) {
        throw new Error("Invalid Input");
    }

    const output = Math.floor(input / 3) + input;
    return output;
}

// ถ้าใช้ฝาของโคล่าที่แลกมาแลกต่ออีก
const optional1_2 = input => {
    input = Number(input);
    if (0 > input > 1000000000 || isNaN(input)) {
        throw new Error("Invalid Input");
    }

    let remainder, newBottles;
    remainder = input % 3
    newBottles = Math.floor(input / 3)

    if (remainder + newBottles < 3) {
        return input + newBottles
    } else {
        return (input-remainder) + optional1_2(remainder + newBottles);
    }
}

// readline(optional1_1);
readline(optional1_2);