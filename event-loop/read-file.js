const { readFile } = require('fs');

console.log("1st task started");

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log("1st task complete");
});
console.log("2st task started");