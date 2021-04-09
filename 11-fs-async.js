// Destructering modules
const { readFile, writeFile } = require('fs');

// Include utf8 in order to read the text in normal characters.
console.log('start');
readFile('./content/first.txt', 'utf8',(err,result)=> {
    if(err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', (err,result)=> {
        if(err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './content/result-async.txt', 
            `Here is the result: ${first}, ${second}`,
            (err,result)=>{
                if(err) {
                    console.log(err);
                    return;
                }
                console.log('done with this task');
            }
        )
    })
})
console.log('Starting next task')

