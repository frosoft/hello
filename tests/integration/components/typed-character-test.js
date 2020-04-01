import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render, waitFor} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | typed-character', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders without delay', async function (assert) {

    await render(hbs`<TypedCharacter @character="a" @delay="0"/>`);

    assert.dom('span').hasText('a');
    assert.dom('span').hasAttribute('data-value', 'a');
    assert.dom('span').hasAttribute('aria-hidden', 'true');
  });

  test('it renders without supplying delay', async function (assert) {

    await render(hbs`<TypedCharacter @character="a"/>`);

    assert.dom('span').hasAttribute('aria-hidden', 'true');
  });

  test('it renders with delay', async function (assert) {

    render(hbs`<TypedCharacter @character="a" @delay="100"/>`);

    await waitFor('span[aria-hidden="false"]', {timeout: 50});

    assert.dom('span').hasAttribute('aria-hidden', 'false');

    await waitFor('span[aria-hidden="true"]', {timeout: 101});

    assert.dom('span').hasAttribute('aria-hidden', 'true');
  });

  test('it renders new lines', async function (assert) {
    this.set('character', '\n');
    await render(hbs`<TypedCharacter @character={{this.character}} @delay="0"/>`);

    assert.dom('br').exists();

    await this.set('character', 'a');

    assert.dom('br').doesNotExist();
  });
});
