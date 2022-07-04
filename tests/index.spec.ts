import { test, expect } from "vitest";
import { cac } from "../src";

test("base-no-args", () => {
  const cli = cac();

  cli.option("--type [type]", "Choose a project type");
  
  const parsed = cli.parse([]);
  expect(parsed).toEqual({
    args: [],
    options: {
      "--": [],
    },
  });
});

test("base-args", () => {
  const cli = cac();
  cli.option("--type <type>", "Choose a project type");
  const parsed = cli.parse(["", "", "--type", "foo"]);
  expect(parsed).toEqual({
    args: [],
    options: {
      "--": [],
      type: "foo",
    },
  });
});
test("type value should be equal to node", () => {
  const cli = cac();

  cli.option("--type <type>", "Choose a project type",{
    default: "node"
  });

  // process.argv
  // 前2个值不需要关心
  const parsed = cli.parse(["", ""]);
  expect(parsed).toEqual({
    args: [],
    options: {
      type: "node",
      "--": [],
    },
  });
});