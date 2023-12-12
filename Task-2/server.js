const http = require ("http");

// Task 2 - Creating a server and writing the server program
const server = http.createServer((req, res) => {
  console.log("server started");
//Set header content type, write and then end the process
res.setHeader("Content-Type", "text/html");
res.write("<h1>Hello Node!!!</h1>\n");
res.end();
})
// The server is listening on port 3000, localhost
server.listen(3000, "localhost", () => {
  console.log("Litening on port 3000")
})


