// GLOBALS - NO WINDOW !!!!

// __dirname    - path to current directory
// __filename   - file name
// require      - function to use modules (CommonJS)
// module       - info about current module (file)
// process      - info about env where the program is being executed

// get information about the globals by running console.log(module) or console.log(process)

console.log(__dirname);
setInterval(() => {
    console.log('hello world')
}, 1000)