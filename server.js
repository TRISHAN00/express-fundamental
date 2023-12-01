const server = require("express");
const app = server();

const singleLogger = (req, res, next) => {
  console.log(`${req.url} ${req.method} ${new Date().toISOString()}`);
  const name = req.query.name;
  if (name == "trishan") {
    return res.json({ message: "Bad Requiest" });
  } else {
    next();
  }
};

app.get("/hello", singleLogger, (req, res, next) => {
  res.json({ message: "hello" });
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
