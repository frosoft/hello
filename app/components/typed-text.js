import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import {A} from '@ember/array';
import {getOwner} from '@ember/application';
import {later} from '@ember/runloop';

export default class TypedText extends Component {

  speed = 50;
  @tracked characterDelays;

  constructor() {
    super(...arguments);

    const config = getOwner(this).resolveRegistration('config:environment');
    if (config.environment === 'test') {
      this.speed = 0;
    }

    this.characterDelays = A(this.characters.map(() => 'false'));
    this._showCharAfterDelayAtIndex(0);
  }

  _showCharAfterDelayAtIndex(index) {
    if (index < this.characterDelays.length) {
      let delay = Math.trunc(this.speed * (1 + Math.random()));
      later(this, () => {
        this.characterDelays.replace(index, 1, ['true']);
        this._showCharAfterDelayAtIndex(index + 1);
      }, delay);
    }
  }

  get characters() {
    return A(this.args.content.split(''));
  }
}
