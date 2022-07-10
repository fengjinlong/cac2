import cac from "cac";
const cli = cac();
cli.option("--name <oo>", "Provide your name", {
  default: "cli-default-name",
});

// ts-node help.ts --name fff
// s { args: [], options: { '--': [], name: 'fff' } }

// default 属性默认的 val

// 通过 -h 和 --help 来显示帮助信息，这会展示所有的指令，如这里设定了 name
cli.help();

// 通过 -v 或 --version 展示版本信息，版本信息同样会在 help message 中出现
cli.version("0.0.0");

// 必须执行这一条
let s = cli.parse();
console.log("s", s);
