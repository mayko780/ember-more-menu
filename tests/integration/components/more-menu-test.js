import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | more menu', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{more-menu}}`);

    assert.equal(this.element.textContent.trim(), 'More');

    // Template block usage:
    await render(hbs`
    {{#more-menu}}
      template block text
    {{/more-menu}}
    `);

    let text = this.element.textContent.trim();
    text = text.replace(/(\r\n|\n|\r)/gm, '');
    text = text.replace(/\s{2,}/g, ' ');
    assert.equal(text, 'template block text More');
  });
});
