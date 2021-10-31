const http = require('http');
var fs = require('fs');


const hostname = '0.0.0.0';
const port = 3000;

function send404Message(response){ 
    response.writeHead(404,{"Content-Type":"text/plain"}); // 단순한 글자 출력 
    response.write("404 ERROR... "); response.end(); 
}


function onRequest(request, response){
    if(request.method == 'GET' && request.url == '/'){
        response.writeHead(200,{"Content-Type":"text/html"}); // 웹페이지 출력 
        fs.createReadStream("./kakaomap.html").pipe(response); // 같은 디렉토리에 있는 index.html를 response 함 
    } else {
        // file이 존재 하지않을때, 
        send404Message(response); } } 
http.createServer(onRequest).listen(3000); 
console.log("Server Created...");