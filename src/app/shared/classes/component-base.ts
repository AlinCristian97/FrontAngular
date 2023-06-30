export abstract class ComponentBase {
    protected name: string = this.getName();
    protected show: boolean = false;

    constructor() { }

    protected getName(): string {
      const componentClassName = this.constructor.name;

      const regexPattern = /[A-Z][a-z]*/g;
      const matches: string[] = componentClassName.match(regexPattern) || [];
  
      if (matches.length > 0  && matches[matches.length - 1] === "Component") {
        matches.pop();
      }

      return matches.join(' ');
    }

    protected toggleShow() {
      this.show = !this.show;
    }
}