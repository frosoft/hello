import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | even', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders even numbers as true', async function(assert) {
    this.set('inputValue', ['1234']);

    await render(hbs`{{even inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'true');

    this.set('inputValue', ['2']);

    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('it renders odd numbers as false', async function(assert) {
    this.set('inputValue', ['1235']);

    await render(hbs`{{even inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'false');

    this.set('inputValue', ['1']);

    assert.equal(this.element.textContent.trim(), 'false');
  });
});
