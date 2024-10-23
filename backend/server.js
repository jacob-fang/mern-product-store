import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send('server is ready')
});

app.listen(5002, () => {
  console.log('server started at http://localhost:5002')
});