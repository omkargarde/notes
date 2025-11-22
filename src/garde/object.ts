// Write a function to flatten a nested JavaScript object

const obj = {
	name: "John",
	address: {
		city: "Bangalore",
		pin: {
			code: 560001,
			area: "MG Road",
		},
	},
	skills: ["JS", "Angular"],
};
// Expected Output:
// {
//     "name": "John",
//     "address.city": "Bangalore",
//     "address.pin.code": 560001,
//     "address.pin.area": "MG Road",
//     "skills[0]": "JS",
//     "skills[1]": "Angular"
// }
