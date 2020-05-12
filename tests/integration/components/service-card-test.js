import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | service-card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {

    await render(hbs`<ServiceCard @heading="Plumbing" @content="I do some pipe work"/>`);

    assert.dom('.service-card > div.content > h2').hasText('Plumbing');
    assert.dom('.service-card > div.content > p').hasText('I do some pipe work');
  });
});
