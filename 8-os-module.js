const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user);

// Method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);


const currenOS = {
    name: os.type(),
    release: os.release(),
    totalMel: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currenOS);