import { Options } from "./Options";

export class Command {
  public options: Options[];
  constructor() {
    this.options = [];
  }
  option(name: string, description: string) {
    const option = new Options(name, description);
    this.options.push(option);
  }
}
