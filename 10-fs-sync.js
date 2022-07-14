const { readFileSync, writeFileSync } = require('fs');
console.log("starting");
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync('./content/result-sync.txt', `result : ${first}, ${second}`);
console.log("ending task");
console.log("starting next");