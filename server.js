const express = require("express");
const path = require('path');

const app = express();

app.use(express.static('./dist/itonic-test/'))

app.get("/*", (req, res) => {
  res.sendFile('index.html', {'dist/itonic-test'})
})

app.listen(process.env.PORT || 8080);