const program = require("commander");
const fs = require("fs");
const marked = require("marked");

// ファイルパスをコマンド引数から取得
program.parse(process.argv);
const filePath = program.args[0];

// ファイルを読み込み
fs.readFile(filePath ,{encoding : "utf8"} ,(err,file) =>
	{
		if(err) {
			console.error(err.message);
			process.exit(1);
			return;
		}
		
		// markDownファイルをHTML文字列に変換
		const html = marked(file ,{gfm : false});
		console.log(html);
	}
);