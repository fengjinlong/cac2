import cac from "cac";
const cli = cac();
cli
  .command("dev", "start dev server")
  .option("--clear-screen", "clear command screen")
  .action((options) => {
    // camelCase 引用 kebab-case 的选项
    console.log(options.clearScreen);
    // true
  });

let sss = cli.parse();
console.log("sss", sss);
// sss { args: [], options: { '--': [], clearScreen: true } }
