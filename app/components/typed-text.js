import Component from '@glimmer/component';
import {A} from '@ember/array';

export default class TypedText extends Component {

  speed = 50;

  get characters() {
    return A(this.args.content.split(''));
  }

  get characterDelays() {
    return this.characters
      .reduce((acc, cur, idx) => {
        if (idx === 0) {
          acc[idx] = this.speed;
        } else {
          acc[idx] = acc[idx - 1] + (this.speed * (1 + Math.random()));
        }
        return acc;
      }, {});
  }
}
