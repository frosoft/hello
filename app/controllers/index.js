import Controller from '@ember/controller';
import {action} from '@ember/object';
import {
  serviceBespokeContent,
  serviceBespokeHeading,
  serviceLegacyContent,
  serviceLegacyHeading
} from '../text-content';

export default class IndexController extends Controller {
  serviceBespokeHeading = serviceBespokeHeading;
  serviceBespokeContent = serviceBespokeContent;
  serviceLegacyHeading = serviceLegacyHeading;
  serviceLegacyContent = serviceLegacyContent;

  @action
  transitionTo(routeName) {
    this.transitionToRoute(routeName);
  }
}
