import Component from '@ember/component';
import {A} from '@ember/array';

export default Component.extend({
  classNames: ['typed-text'],

  speed: 50,

  get characters() {
    return A(this.content.split(''));
  },

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
  },
});
