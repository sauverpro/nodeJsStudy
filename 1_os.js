const os = require("os");
// info about user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in secs
console.log(`the system : ${os.uptime()}`);
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem()
}
console.log(currentOs);