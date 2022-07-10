import cac from "cac";
const cli = cac();
// build --env.bar baz --env.foo foo2
// console this: { '--': [], env: { bar: 'baz', foo: 'foo2' } }
cli
  .command("build", "desc")
  .option("--env <env>", "set env")
  .action((options) => {
    console.log({ options });
  });
let s = cli.parse();
console.log("s", s);
// ts-node objlink.ts build --env.bar baz --env.foo foo2
// { options: { '--': [], env: { bar: 'baz', foo: 'foo2' } } }
// s { args: [], options: { '--': [], env: { bar: 'baz', foo: 'foo2' } } }
