const fs = require("fs");

fs.readFile("sample.md",(err,file) =>
	{
		if(err) {
			console.error(err);
		}
		else {
			console.log(file);
		}
	}
);