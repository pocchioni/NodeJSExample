const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('<h2>Calculator home page</h2>');
});
app.get('/sum', function(req, res) {
  res.send('<h3>Calculator sum page</h3>');
});



app.listen(3000, function() {
  console.log('listening on 3000');
});
