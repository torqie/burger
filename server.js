const express = require("express");
const PORT = 3000;
const app = express();



app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});