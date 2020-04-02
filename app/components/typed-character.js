import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import {later} from '@ember/runloop';

export default class TypedCharacter extends Component {

  @tracked ariaHidden;

  get isNewLine() {
    return this.args.character === '\n';
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
      }, delay);
    }
  }
}
