import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import {later} from '@ember/runloop';
import {getOwner} from '@ember/application';

export default class TypedCharacter extends Component {

  @tracked ariaHidden;

  get isNewLine() {
    return this.args.character === '\n';
  }

  get testTolerantDelay() {
    const config = getOwner(this).resolveRegistration('config:environment');
    if (config.environment === 'test') {
      return 10;
    }
    return this.args.delay;
  }

  constructor() {
    super(...arguments);

    const delay = this.args.delay;
    if (`${delay}` === '0') {
      this.ariaHidden = 'true';
    } else {
      this.ariaHidden = 'false';
      later(this, () => {
        this.ariaHidden = 'true';
      }, this.testTolerantDelay);
    }
  }
}
