import mri from "mri";
import { Command } from "./Command";

class CAC {
  private globalCommand: Command;

  constructor() {
    this.globalCommand = new Command();
  }
  // Implement
  option(rawName: string, description: string) {
    this.globalCommand.option(rawName, description);
    return this;
  }
  parse(rawArr: string[]) {
    // console.log("aaa", rawArr);
    // console.log("mri", mri(rawArr));
    //   aaa [ '', '', '--type', 'foo' ]
    // mri { _: [ '', '' ], type: 'foo' }
    // console.log("options", this.globalCommand.options);
    // options [
    //   Options {
    //     rawName: '--type [type]',
    //     description: 'Choose a project type'
    //   }
    // ]
    const mriResult = mri(rawArr);
    const options = this.globalCommand.options.reduce((options, option) => {
      if (option.name) {
        options[option.name] = mriResult[option.name];
      }
      return options;
    }, {});

    return {
      args: [],
      options: {
        ...options,
        "--": [],
      },
    };
  }
}
export default CAC;
