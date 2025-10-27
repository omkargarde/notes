const promise = new Promise((resolve, reject) => {
	const random = Math.random() > 0.5;
	if (random) {
		resolve("success");
	}
	reject("failure");
});

promise.then((res) => console.log(res)).catch((error) => console.error(error));

fetch("https://api.example.com/users")
	.then((res) => res.json)
	.then((json) => console.log(json))
	.catch((error) => console.error(error));
