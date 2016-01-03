var http = require('http');
var parse = require('url').parse
var join = require('path').join;
var root = __dirname;

var server = http.createServer(function(req, res) {
  var url = parse(req.url);
  var path = join(root, url.pathname);
  //construct absolute path
  var stream = fs.createReadStream(path); //create fs.ReadStream
  stream.on('data', function(chunk) {
    res.write(chunk);
  });
  stream.on('end', function() {
    res.end();
  });
});

server.listen(3000);
