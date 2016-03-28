//add pub/sub topics which are used across other plugins and applications
import {noView} from 'aurelia-framework';
@noView
export class Topics {
  static config = {
    environment: 'topics_config_environment'
  };
}
