const kue = require('kue');
const queue = kue.createQueue();

const jobData = {
	phoneNumber: '0905455555',
	message: 'was up',
}

const job = queue.create('push_notification_code', jobData)
	.save((err) => {
		if (!err) {
			console.log(`Notification job created: ${job.id}`);
		}
	});

job.on('complete', (result) => {
	console.log('Notification job completed');
});

job.on('failed',  (err) => {
	console.log('Notification job failed');
});

