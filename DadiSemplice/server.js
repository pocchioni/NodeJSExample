/*
   If you call this code by a browser it sends 2 requests to the server.
   One for the FavIcon and one for the page itself.
   Infatti possiamo vedere con la sys.puts che il calcolo viene fatto 2 volte!
*/

var port = 3000;
var http = require('http');
var sys = require("sys");

http.createServer(function(req, res) {

    var dado1 = Math.floor(Math.random() * 6) + 1;
    var dado2 = Math.floor(Math.random() * 6) + 1;
    var sum = dado1+dado2;
    //console.log(sum);
    sys.puts("Ho lanciato i dadi la somma è " + sum);

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Lancio di 2 dadi <br /> Dado 1 ' + dado1 + '<br />Dado 2 ' + dado2 + '<br />Somma dei due dadi: '  + sum);

}).listen(port);

console.log('The magic happens on port ' + port);
