const express = require("express");
const app = express();

const PORT = 4000;

const handleListening = () => {
  console.log("Listening on: http://localhost:4000");
};

app.listen(PORT, handleListening);
