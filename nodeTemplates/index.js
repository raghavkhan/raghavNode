const http = require('http');
const fs = require('fs');
const url = require('url');

// const textIn = fs.readFileSync('./input.txt','utf-8');
// console.log(textIn);
// const textOut = `this is what we want to add extra. ${data1}`;
// fs.writeFileSync('./output.txt',textOut);


const data1 = fs.readFileSync(`${__dirname}/input.txt`,'utf-8');//working correctly

    const data2 =`this is final ${data1}`;
    fs.writeFileSync(`${__dirname}/output.txt`,data2);
    console.log('file written');

    
    
    const data = fs.readFileSync(`${__dirname}/apiData/api.json`,'utf-8');
    const dataObject = JSON.parse(data);
    console.log(dataObject);
    fs.writeFileSync(`${__dirname}/output.txt`,data);
    
    const server = http.createServer((req, res) => {
    
    if (req.url === '/') {
        res.end('hello from the server i am the home page');
    }
    else if (req.url === '/about')
        res.end('this is about us');
    else if (req.url === '/apidata') {
        res.writeHead(200, {'content-type':'application/json','my-own-header':'hello I am meta data'});
        res.end(dataObject[2].description);
    }
    else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.end('<h1> 404 error. Pages does not exist</h1>');

    }


});

server.listen(8000, '127.0.0.1', () => { console.log('listening to port 8000') });
