const readline = require('./lib/readline.js');

const exam7 = input => {
    if (!/^[a-z]+$/.test(input)) {
        throw new Error("Invalid Input");
    }
    let count = 1;
    let set = new Set();
    for (const char of input) {
        if (set.has(char)) {
            count += 1;
            set.clear();
            set.add(char);
        } else
            set.add(char);
    }
    return count;
}

readline(exam7);