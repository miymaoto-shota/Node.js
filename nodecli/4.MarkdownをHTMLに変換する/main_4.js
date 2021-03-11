const program = require("commander");
const fs = require("fs");
const marked = require("marked");

// ファイルパスをコマンド引数から取得
program.option("--gfm" ,"GFMを有効にする");
program.parse(process.argv);
const filePath = program.args[0];

const cliOptions = {
	gfm : false,
	...program.opts(),
};

// ファイルを読み込み
fs.readFile(filePath ,{encoding : "utf8"} ,(err,file) =>
	{
		if(err) {
			console.error(err.message);
			process.exit(1);
			return;
		}
		
		// markDownファイルをHTML文字列に変換
		const html = marked(file ,{gfm : cliOptions.gfm,});
		console.log(html);
	}
);