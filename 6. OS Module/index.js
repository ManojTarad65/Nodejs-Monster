import os from "os";

//architecture
console.log(os.arch());
//output -> arm64

//free memory
console.log(os.freemem());
//output -> 1179869184

//total memory
console.log(os.totalmem());
//output -> 17179869184

//cpu
console.log(os.cpus());
//output -> [CpuInfo]

//hostname
console.log(os.hostname());
//output -> mbp

//platform
console.log(os.platform());
//output -> darwin

//user info
console.log(os.userInfo());
//output -> { uid: 501, gid: 20, username: 'apple', ... }

//uptime
console.log(os.uptime());
//output -> 123456789

//load average
console.log(os.loadavg());
//output -> [1.23, 2.34, 3.45]

//network interfaces
console.log(os.networkInterfaces());
//output -> { en0: [NetworkInterfaceInfo] }
