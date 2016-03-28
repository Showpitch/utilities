import {noView} from 'aurelia-framework';
@noView
export class Helpers {
  static generateGUID() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a=>(a ^ Math.random() * 16 >> a / 4).toString(16));
  }
  publicGenerateGUID() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a=>(a ^ Math.random() * 16 >> a / 4).toString(16));
  }
}
