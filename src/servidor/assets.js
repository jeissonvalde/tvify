var fs = require('fs')

// ___ FUNCIÓN PARA LECTURA DE ARCHIVOS CON FS
module.exports.serveStatic = function serveStatic (name, callback) {
	fs.readFile('./public/' + name, function(err, data) {
		if (err) {
			return callback(err)
		}
		callback(err, data.toString())
	})
}
