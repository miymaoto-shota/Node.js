const program = require("commander");
const fs = require("fs");

// ファイルパスをコマンド引数から取得
program.parse(process.argv);
const filePath = program.args[0];

// ファイルを読み込んで、内容を出力
// fs.readFile(filePath ,(err,file) =>
fs.readFile(filePath ,{encoding : "utf8"} ,(err,file) =>
	{
		console.log(file);
	}
);