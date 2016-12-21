const net = require('net');

let server = net.createServer((client) => {
    console.log("클라이언트가 연결");
});

server.listen(9999, 'localhost', () => {
    console.log('서버가 실행');
});
