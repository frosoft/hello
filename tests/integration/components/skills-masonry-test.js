import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | skills-masonry', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    await render(hbs`<SkillsMasonry />`);

    assert.dom('section.skills-masonry').exists('should render the masonry section');
    assert.dom('section.skills-masonry > div').doesNotExist('should render without content');
  });

  test('it renders with skills/tech/area content', async function(assert) {
    this.set('content', [{
        type: 'type1',
        size: 'm',
        value: 'kickboxing'
      },{
        type: 'type1',
        size: 'l',
        value: 'induction heaters'
      },{
        type: 'type2',
        size: 'l',
        value: 'javelin'
      }]);

    await render(hbs`<SkillsMasonry @content={{this.content}}/>`);

    assert.dom('div.type1').exists({count: 2});
    assert.dom('div.type2').exists({count: 1});
    assert.dom('div.m').exists({count: 1});
    assert.dom('div.l').exists({count: 2});
    assert.dom('div.type1.m').hasText('kickboxing');
    assert.dom('section.skills-masonry > div').hasAttribute('data-aos', 'zoom-in');
  });
});
