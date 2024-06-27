const redis = require('redis');
const client = redis.createClient();

client.on('error', (err) => {
	console.log(`Redis client not connected to the server: ${err.message}`);
});

client.on('connect',  () => {
	console.log('Redis client connected to the server');
});

let sub = client;

sub.on('message', (channel, message) => {
	if (channel == 'holberton school channel') {
		console.log(message);
		if (message === 'KILL_SERVER') {
			sub.unsubscribe();
			sub.quit();
		}
	}
});


sub.subscribe('holberton school channel');
