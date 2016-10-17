var http = require('http')
var assets = require('./assets.js')

// ___ Administración de servidor. Creación del mismo.
var server = http.createServer(function (request, response) {
	console.log('He recibido un req a ' + request.url)
	switch (request.url) {
		case '/':
		assets.serveStatic('index.html', function (err, content) {
			response.end(content)
		})
		  break
		 case '/app.js':
		assets.serveStatic('app.js', function (err, content) {
			response.end(content)
		})
		  break
		case '/app.css':
		assets.serveStatic('app.css', function (err, content) {
			response.end(content)
		})
		  break
		default:
		response.statusCode = 404;
		response.end('Not found');
		  break
	}
})

// ___ Asignación del puerto al servidor.
server.listen(2016, function () {
	console.log('Servidor local iniciado. \n Puerto 2016')
})