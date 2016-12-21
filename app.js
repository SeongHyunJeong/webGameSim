const net = require('net');

let client = net.connect({port:9999, host:'localhost'}, () => 
{
    console.log('서버와 연결대기중')
});




//const fs = require("fs");

//파일 감시
// fs.watch('./',(event, filename) => {
//     console.log(`event type is: ${event}`);
//     if(filename) {
//         console.log(`filename provided: ${filename}`);
//     } else {
//         console.log(`filename not provided`);
//     }

// });

//문자 반전해서 출력
//  let moon = fs.readFile('app.js','utf-8', (err, data) => {
//      fs.writeFile('asdf.js',data.split("").reverse().join(""));
//  });

// const fs = require("fs");
// let data = fs.readFile('app.js','utf-8', (err, data) => {
//     console.log(data);
// });

//const os = require("os");
//console.log(os.arch()); 비트
//console.log(os.cpus()); cpu