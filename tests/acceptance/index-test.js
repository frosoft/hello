import {module, test} from 'qunit';
import {currentURL, visit} from '@ember/test-helpers';
import {setupApplicationTest} from 'ember-qunit';

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');

    assert.dom('.background-spots').exists();
    assert.dom('.main-header').exists();
    assert.dom('.skills-masonry').exists();
    assert.dom('.service-card').exists({count: 3});
    assert.dom('.service-card[data-aos="zoom-in-right"] + .service-card[data-aos="zoom-in-left"]')
      .exists('should add scroll efects to service cards from alternate sides');
    assert.dom('#contact').exists();
    assert.dom('#contact a').hasAttribute('href', 'mailto:richard.frosztega@gmail.com');
    assert.dom('#contact a').hasText('richard.frosztega@gmail.com');
  });
});
