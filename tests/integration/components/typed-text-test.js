import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render, waitFor} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | typed-text', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {

    await render(hbs`<TypedText @content="Hello"/>`);

    assert.dom('.typed-text span').exists({count: 5});
    assert.dom('.typed-text span:first-of-type').hasText('H');
    assert.dom('.typed-text span:nth-of-type(2)').hasText('e');
    assert.dom('.typed-text span:nth-of-type(3)').hasText('l');
    assert.dom('.typed-text span:nth-of-type(4)').hasText('l');
    assert.dom('.typed-text span:last-of-type').hasText('o');
  });

  test('it renders delay on each character appearing', async function (assert) {

    render(hbs`<TypedText @content="AB"/>`);

    await waitFor('.typed-text');

    assert.dom('.typed-text span[aria-hidden="true"]').doesNotExist();

    await waitFor('.typed-text span[aria-hidden="true"]', {timeout: 101});

    assert.dom('.typed-text span[aria-hidden="true"]').exists({count: 1});

    await waitFor('.typed-text span:nth-of-type(2)[aria-hidden="true"]', {timeout: 101});

    assert.dom('.typed-text span[aria-hidden="true"]').exists({count: 2});
  });
});
