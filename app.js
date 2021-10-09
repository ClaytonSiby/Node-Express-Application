const http = require("http");

// creating a new webserver.
const server = http.createServer((inComingRequest, response) => {
  if (inComingRequest.url === "/") {
    response.end('Welcome to our home page');
  }

  if (inComingRequest.url === "/about") {
    response.end('Welcome to our about page');
  }

  response.end(`
    <h1>404 page not found</h1>
    <a href="/">Go back home</a>
  `);
});

// what port our server is gonna be listening to.
server.listen(5000);
