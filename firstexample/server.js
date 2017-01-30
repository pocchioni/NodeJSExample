
var port = process.env.PORT || 3000;
var http = require('http');
var math = require('./math.js');
var bind = require("bind");

http.createServer(function(request, response) {
  var headers = request.headers;
  var method = request.method;
  var url = request.url;
  var body = [];
  request.on('error', function(err) {
    console.error(err);
  }).on('data', function(chunk) {
    body.push(chunk);
  }).on('end', function() {
    body = Buffer.concat(body).toString();
    // BEGINNING OF NEW STUFF

    response.on('error', function(err) {
      console.error(err);
    });

    var num1 = 2;
    var num2 = 4;

    bind.toFile('home.html', {
            nome: 'Somma-Prodotto',
            r1: math.sum(num1,num2),
            r2: math.prod(num1,num2)
        }, function(data) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        });

    console.log(math.sum(num1,num2));
    console.log(math.prod(num1,num2));


  });
}).listen(port);

console.log('The magic happens on port ' + port);
