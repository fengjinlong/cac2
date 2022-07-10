import cac from "cac";
const cli = cac();
cli
  .command("rm <dir>", "Remove a dir")
  .option("-r, --recursive", "Remove recursively")
  .action((dir, options) => {
    console.log(`remove ${dir}${options.recursive ? " recursively" : ""}`);
  });

cli.help();
let ss = cli.parse();
console.log("ss", ss);
// ts-node order.ts rm foo -r
// remove foo recursively
// ss { args: [ 'foo' ], options: { '--': [], r: true, recursive: true } }
