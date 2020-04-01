import Component from '@ember/component';
import {later} from '@ember/runloop';
import {equal} from '@ember/object/computed';

export default Component.extend({
  tagName: 'span',
  attributeBindings: ['ariaHidden:aria-hidden', 'dataValue:data-value'],

  isNewLine: equal('character', '\n'),
  get dataValue() {
    return this.character;
  },

  init() {
    this._super(...arguments);

    const delay = this.delay;
    if (`${delay}` === '0') {
      this.set('ariaHidden', 'true');
    } else {
      this.set('ariaHidden', 'false');
      later(this, function () {
        this.set('ariaHidden', 'true')
      }, delay);
    }
  }
});
