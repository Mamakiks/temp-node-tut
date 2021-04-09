// Destructering modules
const { readFileSync, writeFileSync } = require('fs');
console.log('start')
// reads files
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// If the file is not there, node.js will create one. 
// If the file is already there. node.js will overwrite the values in the file.
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    {flag: 'a'} // flag: 'a' appends the text to the file. Otherwise it is overwritten.
)
console.log('done with this task');
console.log('starting the next one');


