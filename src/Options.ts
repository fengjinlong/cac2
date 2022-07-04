export class Options {
  name: string;
  description: string;
  rawName: string;
  constructor(name: string, description: string) {
    this.rawName = name;
    this.description = description;

    const resolvedName = name.match(/--(\w+) \<(\w+)\>/)?.[1];
    // ??
    if (resolvedName) {
      this.name = resolvedName;
    }
  }
}
