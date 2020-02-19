const readline = require('./lib/readline.js');

const exam6 = input => {
    switch(true) {
        case /^[A-Z]+$/.test(input):
            return "All Capital Letter";
        case /^[a-z]+$/.test(input): 
            return "All small Letter";
        case /^[a-zA-Z]+$/.test(input):
            return "Mix";
        default:
            return "Invalid Input";
    }
}

readline(exam6);