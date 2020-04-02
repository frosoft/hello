import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | service-card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {

    await render(hbs`<ServiceCard @heading="Plumbing" @content="I do some pipe work"/>`);

    assert.dom('a.service-card > section > h2').hasText('Plumbing');
    assert.dom('a.service-card > section > p').hasText('I do some pipe work');
  });
});
