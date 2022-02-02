var http = require('http');
var server = http.createServer();
server.on('request', function(req, res) {

    
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('This is how we use header!'); 
       res.end(); });
       
      server.listen(3000);
      console.log('your server is running properly');