const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = callback => {
    rl.question("Please enter a string: ", input => {
        console.log(callback(input));
        rl.close()
    });
}

rl.on("close", function () {
    process.exit(0);
});