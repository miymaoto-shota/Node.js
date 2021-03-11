const program = require("commander");
const fs = require("fs");
const marked = require("marked");

// ファイルパスをコマンド引数から取得
program.option("--gfm" ,"GFMを有効にする");
program.parse(process.argv);

const options = program.opts();
console.log(options.gfm);