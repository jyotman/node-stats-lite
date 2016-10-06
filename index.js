var pcu = require('process-cpu-utilization');
var path = require('path');
var os = require('os');

module.exports = function(app){
	app.get('/monitor', function(req, res){
		pcu.cpu(function(err, value){
			var stats = {};
			if(err){
				console.log('Error getting cpu info');
				stats.error = err;
			}
			else{
				var memoryConsumedPercent = (process.memoryUsage().rss / os.totalmem()) * 100;
				stats = {
					version: process.version,
					service_name: path.basename(process.argv[1]),
					cpu_usage: value,
					memory_consumed: process.memoryUsage().rss,
					memory_consumed_percent: memoryConsumedPercent,
					uptime: process.uptime(),
					pid: process.pid
				};
			}
			res.json(stats);
		});
	});
}