var http= require('http'),
	port = 9000,
	messages = [{messageText: 'Yolo'}]

//createServer must be included to create all node.js servers
//Says than when it is hit with a request, it will return with a response.
http.createServer(function(request,response) {
	//writeHead creates a HTML header)
	response.writeHead(200, {'Content-Type': 'application/JSON', 'Access-Control-Allow-Origin': '*'});

	if (request.method == "OPTIONS") {
		response.writeHead(200, 
			{'Content-Type': 'application/JSON',
		 	'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'});

	}
	if(request.method == "GET") {
		response.write(JSON.stringify(messages))
	}

	if (request.method == 'POST') {
   var postData = '';

   request.on('data', function(chunk) {
    postData += chunk.toString();
   });
   
   request.on('end', function() {
    messages.push(JSON.parse(postData));
    console.log("Got POST data:");
    console.log(JSON.parse(postData));
   });
  	}
  	response.end();

}).listen(port);

console.log('Server running at' + port);