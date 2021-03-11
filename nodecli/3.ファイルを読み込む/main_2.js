const fs = require("fs");

try {
	const file = fs.readFileSync("sample.md");
	console.log(file);
}
catch(err) {
	console.error(err);
}