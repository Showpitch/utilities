//export function configure(config) {
//  config.globalResources(
//    './notification'
//  );
//}
export class Notification {
  constructor() {
    this.foo = 1;
  }

  increment() {
    return this.foo++;
  }
}
