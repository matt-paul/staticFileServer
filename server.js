//By using stream#pipe, the original server code can be greatly simplified
var http = require('http');
var parse = require('url').parse
var join = require('path').join;
var root = __dirname;

//By using stream#pipe, the original server code can be greatly simplified
var server = http.createServer(function(req, res) {
  var url = parse(req.url);
  var path = join(root, url.pathname);
  //construct absolute path
  var stream = fs.createReadStream(path); //create fs.ReadStream
  stream.pipe(res);
});

server.listen(3000);
//original version
//var server = http.createServer(function(req, res) {
//  var url = parse(req.url);
//  var path = join(root, url.pathname);
//  //construct absolute path
//  var stream = fs.createReadStream(path); //create fs.ReadStream
//  stream.on('data', function(chunk) {
//    res.write(chunk);
//  });
//  stream.on('end', function() {
//    res.end();
//  });
//});
