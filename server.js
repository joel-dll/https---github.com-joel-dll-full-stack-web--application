'use strict';
const http = require('http');
const fs = require('fs');//to read files

var port = 3000;//can be any available port for node.js server


//const { parse } = require('querystring');

const server = http.createServer((req, res) => {     
    console.log('request made')    

//set header content type
    res.setHeader('Content-Type', 'text/html');//can text/plain

    //read an html file 
    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();//close the response in case of error
        } else {
            //write the html file data to browser[use this option for writing multiple data items]
            //res.write(data);

            //finally tell the server to show response to browser by passing the html file data
            res.end(data);
        }
    })    
});

server.listen(port, 'localhost', () => {
    console.log('listening for requests on port 3000')
});
