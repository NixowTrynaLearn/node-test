require("http").createServer((req, res) => res.end("Node works"))
  .listen(process.env.PORT || 3000, "127.0.0.1");