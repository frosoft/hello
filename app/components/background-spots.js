import Component from '@ember/component';

export default Component.extend({
  classNames: ['background-spots'],
  spots: Object.freeze(new Array(8))
});
