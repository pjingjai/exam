const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = callback => {
    rl.question("Please enter a string 1: ", input1 => {
        rl.question("Please enter a string 2: ", input2 => {
            rl.question("Please enter a string 3: ", input3 => {
                console.log(callback(input1, input2, input3));
                rl.close();
            });
        });
    });
}

rl.on("close", function () {
    process.exit(0);
});