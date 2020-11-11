console.log('module.js is working');

async function start() {
	const data = await new Promise((resolve) => resolve('asd'));
	console.log(data);
}

start();
