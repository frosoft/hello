import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | typed-character', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('ariaHidden', 'true');
    await render(hbs`<TypedCharacter @character="a" aria-hidden={{this.ariaHidden}}/>`);

    assert.dom('span').hasText('a');
    assert.dom('span').hasAttribute('data-value', 'a');
    assert.dom('span').hasAttribute('aria-hidden', 'true');

    this.set('ariaHidden', 'false');

    assert.dom('span').hasAttribute('aria-hidden', 'false');
  });

  test('it renders new lines', async function (assert) {
    this.set('character', '\n');
    await render(hbs`<TypedCharacter @character={{this.character}}/>`);

    assert.dom('br').exists();

    await this.set('character', 'a');

    assert.dom('br').doesNotExist();
  });
});
