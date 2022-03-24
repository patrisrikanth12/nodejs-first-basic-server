//importing nodejs http module
const http = require("http");
const port = 3000;

//creating server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(" home-page working");
    res.end();
  } else if(req.url === "/contact"){
    res.write("contact-page working");
    res.end();
  } else if(req.url === "/about"){
    res.write("about-page working");
    res.end();
  } else{
      res.writeHead(404);
      res.write("<h1>Page not found <br> 404 error</h1>");
      res.end();
  }
});

//listening to the server
server.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening to the port no " + port);
  }
});
