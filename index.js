const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const mongoRouter = require('./Routes/mongoRouter');


const app = express();

const hostname = 'localhost';
const port = 3000;


const promisify = (req, res, next) => {
    res.sendPromise = (promise) => {
      promise
        .then((result) => {
          res.send( result);
        })
        .catch((err) => {
          res.send(
        err)
          ;
        });
    };
    next();
  };
  app.use(promisify);
app.use('/Docs', mongoRouter);

app.use(bodyParser.json());




const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});


