const { createServer } = require("http");
const fs = require("fs");
const path = require('path')


const server = createServer((request,response)=>{


    let filePath = path.join(
        __dirname,
        "public",
        request.url === "/" ? "index.html" : request.url
    );

    let extName = path.extname(filePath);
    let contentType = 'text/html';

    switch (extName) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    console.log(`File path: ${filePath}`);
    console.log(`Content-Type: ${contentType}`)

    response.writeHead(200, {'Content-Type': contentType});

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(response);



    // console.log(request.url);
    // if(request.url == "/test"&& request.method == "GET"){
    //     response.writeHead(200,{'Content-Type':'application/json'})
    //     response.write(JSON.stringify({a:1,b:2,c:3}));
    //     response.end();
    // }else if(request.method == "POST"){
    //     response.writeHead(404,{'Content-Type':'text/html'})
    //     response.write("<p>არ არის შესაბამისი მეთოდი მონაცემების მოთხოვნის</p>");
    //     response.end();
    // }else{
    //     fs.readFile('index.html',function (err, data){
    //         response.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
    //         response.write(data);
    //         response.end();
    //     });
    // }


})


server.listen(8080);