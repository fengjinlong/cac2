import cac from "cac";
const cli = cac();
// 在命令名中：

// 方括号：表示可选值
// 尖括号：表示必须值
// 在选项值中：

// 尖括号：string 或者 number
// 方括号：true
cli
  .command("deploy <folder>", "Deploy a folder to AWS")
  .option("--scale [level]", "Scaling level")
  .action((folder, options) => {
    // ...
    console.log("fo", folder, options);
  });

let b = cli.parse();
console.log("b", b);
// ts-node brackets.ts deploy aaa --scale
// fo aaa { '--': [], scale: true }
// b { args: [ 'aaa' ], options: { '--': [], scale: true } }

// ts-node brackets.ts deploy aaa --scale a
// fo aaa { '--': [], scale: 'a' }
// b { args: [ 'aaa' ], options: { '--': [], scale: 'a' } }

// cli
//   .command('build [project]', 'Build a project')
//   .option('--out <dir>', 'Output directory')
//   .action((folder, options) => {
//     // ...
//   })
